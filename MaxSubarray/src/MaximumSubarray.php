<?php
declare (strict_types = 1);
namespace LeadDesk;

require_once 'vendor/autoload.php';

/**
 * MaximumSubarray class
 */
class MaximumSubarray implements MaxSubarray
{
    public function contiguous(array $array): int
    {
        //check the array length
        if (count($array) === 0) {
            return 0;
        }
        //if array contains, that will be the maximum
        if (count($array) === 1) {
            return $array[0];
        }
        $maxCountingValue = $array[0];
        $maxEndValue = $array[0];
        foreach ($array as $value) {
            $maxEndValue = max($value, $maxEndValue + $value);
            $maxCountingValue = max($maxCountingValue, $maxEndValue);
        }

        return $maxCountingValue;
    }
}

$maxSubarray = new MaximumSubarray();
$inputArray = [-1, '1', '5', -6, 3];
$result = $maxSubarray->contiguous($inputArray);
echo "Maximum contiguous SUM is $result" . "\n";
