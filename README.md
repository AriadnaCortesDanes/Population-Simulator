# Population-Simulator
**Keywords**: Predator-prey dynamics, dynamic system, web programming   
Available at: https://ariadnacortesdanes.github.io/Population-Simulator/   
Some Matlab code for the data analysis and plots is also available in the `Matlab` folder.  

## Project Overview
These project aim to visually represent some of the most traditionally studied PDE, the ones related to population dynamics. This project tries to present this equations in an intuitive (and cute) way, through a web visualizer that runs different simulations starting at random state and emulating the evolution of that populations. The simulator runs in three modes:   

### Infinite food mode  
This mode corresponds to the population dynamics equations with unlimited resources `x' = kx`, showing its characteristic exponential growth of the population at rate `k`.   
![infinite](https://github.com/user-attachments/assets/f82b220f-9e40-4fef-9e32-c8985236e0c6)


### Limited food mode
This mode corresponds to the population dynamics equations with limited resources `x' = k(1-x/r)`, resticting the access to resources for the population, setting therefore a maximum amount of individuals `r` that the ecosystem can hold.  
![bunnies_and_food](https://github.com/user-attachments/assets/e853d1b7-c5a7-4194-81f4-209ef73ef823)
![limited](https://github.com/user-attachments/assets/eb774a76-cb55-4d54-a093-1ffc0c035c1e)


### Predator mode
This is the implementation of the classical formulation of Lokta-Volterra equations, modeling an system with two species, a predator and a prey, where prey has limited access to food. See also an analysis of the evolution of every population following the traditional shape, obtained in one of the simulations.  
![Bunnies_and_wolfs](https://github.com/user-attachments/assets/06966358-7da9-41ee-8b47-a96c11deff11)
![predator](https://github.com/user-attachments/assets/be833dc6-ef02-448a-ae3f-3e5b9de5ae35)

## Contact information
- Ariadna Cortes Danes: ariadna.cortes.danes@estudiantat.upc.edu
- Marc Lopez Domenech: marc.lopez.domenech@estudiantat.upc.edu


