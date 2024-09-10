# Population-Simulator
**Keywords**: Predator-prey dynamics, dynamic system, web programming   
Available at: https://ariadnacortesdanes.github.io/Population-Simulator/   
Some Matlab code for the data analysis and plots is also available in the `Matlab` folder.  

## Project Overview
These project aim to visually represent some of the most traditionally studied PDE, the ones related to population dynamics. This project tries to present this equations in an intuitive (and cute) way, through a web visualizer that runs different simulations starting at random state and emulating the evolution of that populations. The simulator runs in three modes:   

### Infinite food mode  
This mode corresponds to the population dynamics equations with unlimited resources `x' = kx`, showing its characteristic exponential growth of the population at rate `k`.   

### Limited food mode
This mode corresponds to the population dynamics equations with limited resources `x' = k(1-x/r)`, resticting the access to resources for the population, setting therefore a maximum amount of individuals `r` that the ecosystem can hold.  

### Predator mode
This is the implementation of the classical formulation of Lokta-Volterra equations, modeling an system with two species, a predator and a prey, where prey has limited access to food. 



