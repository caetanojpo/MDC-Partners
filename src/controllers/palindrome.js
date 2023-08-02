class Palindrome {
  static check = (req, res) => {
    try {
      const originalWord = req.params.word;
      let palindrome = originalWord
        .split(" ")
        .map((word) => word.split("").reverse().join(""));

      const isPalindrome = originalWord == palindrome ? true : false;

      res
        .status(200)
        .send(
          `${originalWord} and ${palindrome} are palindrome: ${isPalindrome}`
        );
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
}

export default Palindrome;
