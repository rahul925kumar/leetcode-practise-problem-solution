<!-- 
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not. -->
<?php
class Solution {
    function isHappy($n) {  
       $a = $b = $n;
        $this->sumOfSquare($n);
        do {
            $a = $this->sumOfSquare($a);
            $b = $this->sumOfSquare($this->sumOfSquare($b));
        }while($a != $b);
        return ($a == 1);
    }
    
    
    function sumOfSquare($n){
        $squareOfnum = 0;
        while($n != 0){
            $squareOfnum += ($n%10) * ($n%10);
            $n = intval($n/10);
        }
        return $squareOfnum;
    }
}

?>
