# Mars Rover Problem Statement

https://code.google.com/archive/p/marsrovertechchallenge

We have a rover class which has different methods such as for getting location, getting direction, rotating, moving and so on. Hence, a rover object can rotate, move, get latest location and direction. So, we're making use of **Single Responsibility Principle (SRP)** here where rover class is responsible to perform rover specific actions.

We have another class called exploreSurface which takes a surface and a rover. We have a single public method execute which takes instruction string. Using this method we can instruct rover to explore a given surface using specific commands. Here, we are making use **Dependency Injection Pattern** where we pass both surface and rover as dependencies instead of having a conrete surface or a rover. We are also making use **Command Pattern** where we are using ICommand interface to encapsulate all information needed to perform an action. We can also see **Open-Closed Principle** and **Dependency Inversion Principle** being followed in exploreSurface.