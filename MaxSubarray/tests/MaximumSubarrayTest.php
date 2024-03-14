<?php
namespace LeadDesk;

use LeadDesk\MaximumSubarray;
use PHPUnit\Framework\TestCase;

/**
 * MaximumSubarrayTest class
 */
class MaximumSubarrayTest extends TestCase
{
    /**
     * @test
     * Test array is valid or not
     *
     * @return void
     */
    public function testIsValidArray()
    {
        $maximumSubarray = new MaximumSubarray();

        $this->assertEquals(0, $maximumSubarray->contiguous([]));
    }

    /**
     * @test
     * Test array data with one element
     *
     * @return void
     */
    public function testOneElementArray()
    {
        $maximumSubarray = new MaximumSubarray();

        $this->assertEquals(5, $maximumSubarray->contiguous([5]));
    }

    /**
     * @test
     * Test Contiguous function
     *
     * @return void
     */
    public function testContiguousResult()
    {
        $maximumSubarray = new MaximumSubarray();

        $this->assertEquals(0, $maximumSubarray->contiguous([]));

        $this->assertEquals(6, $maximumSubarray->contiguous([-1, 1, 5, -6, 3]));

        $this->assertEquals(17, $maximumSubarray->contiguous([1, 1, 5, 6, 3]));

        $this->assertEquals(16, $maximumSubarray->contiguous([1, 5, 6, 3]));

        $this->assertEquals(-1, $maximumSubarray->contiguous([-1, -5, -6, -3]));
    }
}
