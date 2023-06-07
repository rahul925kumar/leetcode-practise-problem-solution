<?php
class Solution
{
  function removeDuplicates(&$nums)
  {
    $length = count($nums);
    $count = 2;
    for ($i = 2; $i < $length; $i++) {
      if ($nums[$i] != $nums[$count - 2]) {
        $nums[$count] = $nums[$i];
        $count++;
      }
    }
    array_slice($nums, $count);
  }
}
