<?php

/*
CHALLENGE 01:

Define bicycle class

Properties: brand, model, year, description, weight_kg

Methods: name, weight_lbs, set_weight_lbs

1kg = 2.2046226218 lbs

set_weight_lbs - pass in weight in lbs and convert to kg

Instantiate, set and read props, call all methods

2022-12-05
Eric Hepperle
#COURSEWORK #TUTWRK #LINKEDINLEARNING
*/

class Bicycle
{

  var $brand;
  var $model;
  var $year;
  var $description = 'Used bicycle';
  var $weight_kg = 0.0;

  var $kgToLbs = 2.2046226218;

  function name()
  {
    return $this->brand . " " . $this->model . " (" . $this->year . ")";
  }

  function weight_lbs()
  {
      return floatval($this->weight_kg) * $this->kgToLbs;
  }


  function set_weight_lbs($value)
  {
    $this->weight_kg = floatval($value) / $this->kgToLbs;
  }

}

$bicycle1 = new Bicycle;
$bicycle1->brand = "Schwinn";
$bicycle1->model = "500e";
$bicycle1->year = 1998;
$bicycle1->description = "A nice, swifit bicycle for pedestrian living.";
$bicycle1->weight_kg = 12;

$trek = new Bicycle;
$trek->brand =  'Trek';
$trek->model = 'Emonda';
$trek->year = '2017';
$trek->weight_kg = 1.0;

$cd = new Bicycle;
$cd->brand = 'Cannondale';
$cd->model = 'Synapse';
$cd->year = '2016';
$cd->weight_kg = 8.0;

echo $trek->name() . "<br/>";
echo $cd->name() . "<br/>";

echo $trek->weight_kg . "<br />";
echo $trek->weight_lbs() . "<br/>";
// notice that one is a property and the other a method

$trek->set_weight_lbs(2);

echo $trek->weight_kg . "<br />";
echo $trek->weight_lbs() . "<br/>";