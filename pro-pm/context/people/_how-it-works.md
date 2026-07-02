# Persona Intelligence System — How It Works

<!-- This file explains how the people/ context system works. Read this first. -->

## Overview

The people/ folder is a **stakeholder intelligence system**. For each person
you work with closely, you create a folder with raw inputs, and the AI builds
a rich persona profile — communication preferences, influence patterns, and
tailored playbooks for working with them effectively.

## How to Create a Persona

### Step 1: Create a Folder

```
context/people/alex-chen/
context/people/sam-patel/
```

### Step 2: Copy the Template Files

```bash
cp -r context/people/_person-template/* context/people/alex-chen/
```

This gives you five files:
- `sources.md` — raw inputs YOU provide
- `persona.md` — AI-generated personality profile
- `communication-guide.md` — AI-generated communication playbook
- `influence-playbook.md` — AI-generated influence strategies
- `interaction-log.md` — running log of interactions

### Step 3: Fill in Sources

Open `sources.md` and dump in everything you know:
- LinkedIn profile (About section, experience, posts)
- Workday/HR info (title, reporting chain, tenure)
- Email threads (representative examples showing their style)
- Meeting observations (how they behave, what they focus on)
- Slack messages (async communication style)
- Personal notes (observations from 1:1s, offsites)

### Step 4: Generate the Persona

Ask the AI:
> "Build persona for Alex Chen"

The AI will read `sources.md` and generate/update `persona.md`,
`communication-guide.md`, and `influence-playbook.md`.

### Step 5: Maintain Over Time

- Add new observations to `sources.md` after significant interactions
- Log key interactions in `interaction-log.md`
- Periodically ask: "refresh the persona for [name]"

## What Gets Auto-Generated

| File                     | Content                                        |
|--------------------------|------------------------------------------------|
| `persona.md`             | Personality, priorities, decision style, triggers |
| `communication-guide.md` | How to present ideas, what to lead with/avoid   |
| `influence-playbook.md`  | How to get buy-in, evidence needs, coalition map |

## System-Level Files (This Folder)

| File                         | Purpose                                     |
|------------------------------|---------------------------------------------|
| `_how-it-works.md`           | This guide                                  |
| `_relationship-map.md`       | Your full stakeholder tier map              |
| `_influence-matrix.md`       | Per-initiative stakeholder alignment        |
| `_communication-quick-ref.md`| One-line cheat sheet per person              |

## Privacy & Ethics

- Keep this system **private and professional**
- Focus on **work-relevant** traits and preferences
- Use this to **communicate better**, not to manipulate
