<?php
namespace LeadDesk;

use LeadDesk\AnagramDetector;
use PHPUnit\Framework\TestCase;

/**
 * AnagramDetectorTest class
 */
class AnagramDetectorTest extends TestCase
{
    /**
     * @test
     * Test words are valid or not
     *
     * @return void
     */
    public function testValidWords()
    {
        $isAnagram = new AnagramDetector();

        $this->assertFalse($isAnagram->isAnagram('', ''));
    }

    /**
     * @test
     * Test words are valid or not
     *
     * @return void
     */
    public function testIsWordsSameLength()
    {
        $isAnagram = new AnagramDetector();

        $this->assertFalse($isAnagram->isAnagram('RAT', 'ROCKET'));
    }

    /**
     * @test
     * Test words are valid or not
     *
     * @return void
     */
    public function testIsWordsWithAlphabetLength()
    {
        $isAnagram = new AnagramDetector();

        $this->assertFalse($isAnagram->isAnagram('RAT./', 'ROCKET'));
    }

    /**
     * @test
     * Test words are valid or not
     *
     * @return void
     */
    public function testSuccessResult()
    {
        $isAnagram = new AnagramDetector();

        //lower case letters
        $this->assertTrue($isAnagram->isAnagram('listen', 'silent'));

        //capital letters
        $this->assertTrue($isAnagram->isAnagram('LISTEN', 'SILENT'));

        //missed letters
        $this->assertTrue($isAnagram->isAnagram('LIsten', 'Silent'));
    }
}
