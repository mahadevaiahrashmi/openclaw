import { mergeOrphanedTrailingUserPrompt } from "./attempt.prompt-helpers.js";
import type { EmbeddedRunAttemptParams } from "./types.js";

export type OrphanedTrailingUserPromptMergeParams = {
  prompt: string;
  trigger: EmbeddedRunAttemptParams["trigger"];
  leafMessage: { content?: unknown };
};

export type OrphanedTrailingUserPromptMergeResult = {
  prompt: string;
  merged: boolean;
  /**
   * When false, the active session leaf is preserved. Use this only when the
   * caller intentionally accepts that the next appended prompt may follow an
   * existing user leaf; most providers reject consecutive user turns.
   */
  removeLeaf: boolean;
};

export type MessageMergeStrategyId = "orphan-trailing-user-prompt";

/**
 * Strategy seam for repairing active transcripts before a new inbound prompt is
 * appended to providers that cannot accept consecutive user turns.
 */
export type MessageMergeStrategy = {
  id: MessageMergeStrategyId;
  mergeOrphanedTrailingUserPrompt: (
    params: OrphanedTrailingUserPromptMergeParams,
  ) => OrphanedTrailingUserPromptMergeResult;
};

export const DEFAULT_MESSAGE_MERGE_STRATEGY_ID: MessageMergeStrategyId =
  "orphan-trailing-user-prompt";

const defaultMessageMergeStrategy: MessageMergeStrategy = {
  id: DEFAULT_MESSAGE_MERGE_STRATEGY_ID,
  mergeOrphanedTrailingUserPrompt,
};

let activeMessageMergeStrategy = defaultMessageMergeStrategy;

/**
 * Resolves the active merge strategy used by run attempts and transcript repair
 * checks.
 */
export function resolveMessageMergeStrategy(): MessageMergeStrategy {
  return activeMessageMergeStrategy;
}

function registerMessageMergeStrategy(strategy: MessageMergeStrategy): () => void {
  const previous = activeMessageMergeStrategy;
  activeMessageMergeStrategy = strategy;
  return () => {
    activeMessageMergeStrategy = previous;
  };
}

export function registerMessageMergeStrategyForTest(strategy: MessageMergeStrategy): () => void {
  // Tests must restore the exact previous strategy because run attempts share
  // this process-local seam across runtime-contract suites.
  return registerMessageMergeStrategy(strategy);
}
