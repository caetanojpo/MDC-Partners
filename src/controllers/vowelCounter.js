class VowelCounter {
  static counter = (req, res) => {
    try {
      const word = req.params.word.toLowerCase();

      const regexVowels = /[aeiou]/gi;

      const vowelMatch = word.match(regexVowels);

      const vowelCount = vowelMatch ? vowelMatch.length : 0;

      res.status(200).send(`The word ${word} contains ${vowelCount} vowels`);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
}

export default VowelCounter;
