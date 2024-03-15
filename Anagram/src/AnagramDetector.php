<?php
declare (strict_types = 1);
namespace LeadDesk;

require_once 'vendor/autoload.php';

class AnagramDetector implements Anagram
{
    /**
     * isAnagram function
     * words are checking whether anagram or not
     *
     * @param string $word1
     * @param string $word2
     * @return boolean
     */
    public function isAnagram(string $word1, string $word2): bool
    {
        if ($word1 === "" || $word2 === "") {
            return false;
        }
        $word1 = $this->_getOnlyAlphabeticCharacters($word1);
        $word2 = $this->_getOnlyAlphabeticCharacters($word2);

        // not anagrams, if string length is different
        if (strlen($word1) !== strlen($word2)) {
            return false;
        }

        //sorting each word
        $count1 = str_split($word1);
        sort($count1);
        $count2 = str_split($word2);
        sort($count2);

        //if them are equal then they are anagrams
        return $count1 === $count2;
    }

    /**
     * Get Only Alphabetic Characters function
     *
     * @param string $word
     * @return string
     */
    private function _getOnlyAlphabeticCharacters(string $word)
    {
        return preg_replace('/[^A-Za-z]/', '', strtolower($word));
    }
}

$isAnagram = new AnagramDetector();
$word1 = 'RAS';
$word2 = 'sAR';
$result = $isAnagram->isAnagram('RAS', 'sAR') ? "Yes" : "No";
echo $word1. " AND ". $word2." --> Are them Anagram ? " . $result . "\n";
