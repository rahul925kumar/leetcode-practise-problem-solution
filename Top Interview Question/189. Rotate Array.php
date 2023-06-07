<?php

class Solution
{
  function rotate(&$nums, $k)
  {
    $temp = [];
    $n = count($nums);
    if ($n < 2) {
      return $nums;
    }
    $k = $k % $n;
    for ($i = $n - $k; $i < $n; $i++) {
      $temp[] = $nums[$i];
    }
    for ($j = 0; $j < $n - $k; $j++) {
      $temp[] = $nums[$j];
    }
    for ($l = 0; $l < $n; $l++) {
      $nums[$l] = $temp[$l];
    }
  }
}
