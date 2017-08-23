# MIT_6.S094_SelfDrivingCars
A repository containing solutions to the challenges presented in the course [MIT 6.S094: Deep Learning for Self-Driving Cars](http://selfdrivingcars.mit.edu/)

## Introduction
Instructor - Lex Fridman

The course is an introduction to the active topic of research, that is Self Driving Cars. The course is an excellent introduction for understanding the fundamentals necessary for attempting a solution to the challenge which is autonomous cars. The main topics covered include:
  1. Introduction to Deep Learning and Self Driving Cars along with the moral issues with autonomous cars
  2. Convolutional Neural Networks for End to End learning on Video frames which are fed as input by camera
  3. Recurrent Neural Networks for understanding context over sequences of images
  4. Reinforcement Learning and Deep-Q Learning algorithm for training the autonomous cars
  5. Deep Learning for Human-Centered Semi-Autonomous Vehicles
  
## Reinforcement Learning: Deep-Q Learning Algorithm

Reinforcement Learning is a type of machine learning that allows you to create AI agents that learn from the environment by 
interacting with it. Just like how we learn to ride a bicycle, an AI agent learns by trial and error. After each action performed, the agent receives feedback which consists of the reward and next state of the environment. The reward is usually defined by a human. The task of AI is to maximize the reward, by learning to generate the optimal solution at every step.

Deep Q Learning algorithm was introduced in the paper, [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/pdf/1312.5602v1.pdf) from NIPS 2013 Deep Learning Workshop from DeepMind. The paper is a nice demo of a fairly standard (model-free) Reinforcement Learning algorithm (Q Learning) learning to play Atari games.

In Q-Learning Algorithm, there is a function called Q Function, which is used to approximate the reward based on a state. We call it Q(s,a), where Q is a function which calculates the expected future value from state s and action a. Similarly in Deep Q Network algorithm, we use a neural network to approximate the reward based on the state. We will discuss how this works in detail.

We use this Deep-Q Learning algorithm where the AI agent learns to drive a car, with negative rewards on crashing and positive rewards on covering maximum distance in minimum time. Actions available to the car at each step can be accelerate, apply brakes, turn right/left at some rotation angle of steering wheel, etc.

## DeepTraffic
DeepTraffic is a gamified simulation of typical highway traffic. Our task is to train a neural network that performs well on high traffic roads. 
The neural network gets to control one of the cars (displayed in red) and has to learn how to navigate efficiently to go as fast as possible. The network only has to tell the car if it should accelerate/slow down or change lanes, and it will do so if that is possible without crashing into other cars.

I was able to achieve a rank of #8 on the Leaderboard for this challenge using the network I designed. The car reached an average speed of 75.26 mph.

## DeepTesla

End-to-end steering describes the driving-related AI task of producing a steering wheel value given an image using convolutional networks.

The neural networks are to be trained in the browser using [ConvNetJS](http://cs.stanford.edu/people/karpathy/convnetjs/) built by Andrej Karpathy.
