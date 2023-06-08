<?php

class Solution
{
  function maxProfit($prices)
  {

    $minprice = PHP_INT_MAX;
    $profit = 0;

    /*$index = 0;
    for ($j = 0; $j < count($prices); $j++) {
      if ($price > $prices[$j]) {
        $price = $prices[$j];
        $index = $j;
      }
    }
    for ($i = $index; $i < count($prices); $i++) {
      $check = $prices[$i] - $price;
      if ($check > $profit ) {
        $profit = $check;
      }
    } */

    foreach ($prices as $key => $price) {
      if ($price < $minprice) {
        $minprice = $price;
      } else if ($price - $minprice > $profit) {
        $profit = $price - $minprice;
      }
    }
    return $profit;
  }
}

$test = new Solution();
$prices = [2, 4, 1];
echo $test->maxProfit($prices);


/* $minPrice = PHP_INT_MAX; // Initialize the minimum price to a very large value
$maxProfit = 0; // Initialize the maximum profit to zero

foreach ($prices as $price) {
  if ($price < $minPrice) {
    $minPrice = $price; // Update the minimum price if we find a smaller price
  } else if ($price - $minPrice > $maxProfit) {
    $maxProfit = $price - $minPrice; // Update the maximum profit if the current difference is greater
  }
}

return $maxProfit; */