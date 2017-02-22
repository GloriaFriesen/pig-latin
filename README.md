# Pig Latin

#### Pig Latin translator, Current Version: 02/22/2017

#### By Gloria Friesen and Chris Carr

## Description
This web application will translate inputted words, phrases, and sentences from plain English to Pig Latin.

## Setup/Installation Instructions
* In your web browser of choice, go to: <http://github.com/GloriaFriesen/pig-latin> or <http://github.com/coderknot/pig-latin>
* Clone repository
* In terminal
  * Switch to leap-year directory
  * open index.html
* In browser
  * Enter a word, phrase, or sentence
  * Click submit to see the translation

## Specifications

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Input: 3
  * Output: 3
* The program treats punctuation, such as period (.) and comma (,) characters, as a non-alphabetical single letter word
  * Input: ,
  * Output: ,
* The program adds "ay" to single-letter words beginning with a vowel
  * Input: i
  * Output: iay
* The program adds "ay" to single-letter words beginning with a vowel, regardless of case
  * Input: I
  * Output: Iay
* The program adds "ay" to multi-letter words beginning with a vowel.
  * Input: ice
  * Output: iceay
* The program moves first consonant to the end and adds "ay" to words beginning with one consonant
  * Input: cat
  * Output: atcay
* The program moves first consonant to the end and adds "ay" to words beginning with one consonant, regardless of case
  * Input: Cat
  * Output: atCay
* The program moves first consecutive consonants to the end and adds "ay" to words beginning with multiple consonants
  * Input: three
  * Output: eethray
* The program moves first consecutive consonants, including any hyphens (-), to the end and adds "ay" to words beginning with multiple consonants
  * Input: x-ray
  * Output: ayx-ray
* The program moves the first consecutive "q" and "u" to the end and adds "ay" to words beginning with "q"
  * Input: queen
  * Output: eenquay
* The program moves first consonants including "q" and "u" to the end and adds "ay" to words beginning with a consonant followed by "q"
  * Input: squeal
  * Output: ealsquay
* The program moves "y" to the end and adds "ay" to words beginning with "y"
  * Input: yes
  * Output: esyay
* The program moves "y" followed by consecutive consonants to the end and add "ay" to words beginning with "y" followed by one or more consonants
  * Input: yttrias
  * Output: iasyttray
* The program applies the above rules to individual words in a multiple-word sentence or phrase, regardless of case
  * Input: I have three cats.
  * Output: Iay avehay eethray atscay.


## Known Bugs
None that we know of.

## Support and contact details
Questions? Concerns? Suggestions? Reach out to us via github.

## Technologies Used
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

## License
This software is licensed under the MIT license.
Copyright (c) 2017 Gloria Friesen and Chris Carr.
