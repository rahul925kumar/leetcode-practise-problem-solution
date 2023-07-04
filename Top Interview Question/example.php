<?php

class A{
  public function getName(){
    return "Rahul";
  }
}

class B extends  A{
  public function getName()
  {
    return "Kumar";
  }
}

/* class Bike
{
  public $power;
  protected $model;
  private $name;

  public function __construct($name = null, $power = null, $model = null)
  {
    $this->model = $model;
    $this->power = $power;
    $this->name = $name;
  }
  protected function getModel()
  {
    return $this->model;
  }

  private function getName()
  {
    return $this->name;
  }

  public function getPower()
  {
    return $this->power;
  }
}
class Specification extends Bike
{

  function __construct($name = null, $power = null, $model = null)
  {
    parent::__construct($name);
  }

  public function test()
  {
    return $this->getModel();
  }
}

$test = new Bike('sdjkfg', 'asdfasdf', 'asdfsadf');
$obj = new Specification('name');
echo $obj->test(); */


interface Animal
{
  public function makeSound();
}

// Class definitions
class Cat implements Animal
{
  public function makeSound()
  {
    echo " Meow ";
  }
}

class Dog implements Animal
{
  public function makeSound()
  {
    echo " Bark ";
  }
}

class Mouse implements Animal
{
  public function makeSound()
  {
    echo " Squeak ";
  }
}

// Create a list of animals
$cat = new Cat();
$dog = new Dog();
$mouse = new Mouse();
$animals = array($cat, $dog, $mouse);

// Tell the animals to make a sound
foreach ($animals as $animal) {
  $animal->makeSound();
}
