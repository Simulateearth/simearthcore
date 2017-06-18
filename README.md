# Simulate Earth (Early Alpha outline)

Gamified, transparent, configurable and simple simulations.

## Architecture

Simulate earth consists of separat layers that can be developed and used separately.

### Configuration language

YAML based configuration files that are the base of every simulation. Based on them the simulation is run, it's controls are enabled and it's data is visualized. The following elements can be configured:

* Timekeeper
The basic configuration that iterates through each step, runs the effects and provides the next version of the state.
* State
Structure of the values and lists of information that get changed in every step.
* Effects
Functions that get triggered based on the state and manipulate the state for the next step. Effects are based on Actions that can be as simple as multiplying a value or as complex as connecting an API. Effects can be configured to listen to certain events or only run under certain conditions.
* Controls
Controls visualize the current state and provide the possibility to interact with the process while it's running. This can reach from simple number output to a timegraph or even an interactive map.

### Core Engine (TypeScript)

### UI

### Community Platform
