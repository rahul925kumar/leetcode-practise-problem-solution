<?php

class RandomizedSet
{
  /**
   */
  function __construct()
  {
  }

  /**
   * @param Integer $val
   * @return Boolean
   */
  function insert($val)
  {
    
  }

  /**
   * @param Integer $val
   * @return Boolean
   */
  function remove($val)
  {
  }

  /**
   * @return Integer
   */
  function getRandom()
  {
  }
}

$val = ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"];
$obj = new RandomizedSet();
$ret_1 = $obj->insert($val);
$ret_2 = $obj->remove($val);
$ret_3 = $obj->getRandom();
