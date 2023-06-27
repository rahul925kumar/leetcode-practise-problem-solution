<?php

use Solution as GlobalSolution;

class Solution
{

  /**
   * @param Integer $num
   * @return String
   */
  function intToRoman($num)
  {
    $roman_symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    $roman_values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    $symbols = array_combine($roman_symbols, $roman_values);

    foreach ($roman_values as $key => $value) {
      if($num < $roman_values){
        echo '<pre>';
        print_r($value);
        echo '</pre>';
      }
    }

    die;
  }
}

$test = new GlobalSolution();
$num = 3;
$test->intToRoman($num);
