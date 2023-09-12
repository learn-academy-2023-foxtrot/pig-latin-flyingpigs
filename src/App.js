import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
          /*
      Pseudo Code: for the vowel functionality 
      input: userInput's value 
      output: The value of userInput and check if first letter is a vowel
      process: Conditional that checks if the first zeroth index of the word is a vowel. If true, we add "way" to the end.
      */
      const pigFirstVowel = vowelsArray[0]; 
      console.log("first vowel", pigFirstVowel)
      const firstVowelLocation =  eachWord.indexOf(pigFirstVowel);
      console.log("vowel location in each word", firstVowelLocation);
      const checkQ = eachWord[firstVowelLocation - 1]
      
      if (firstVowelLocation === 0 ) {
          return eachWord + "way"; // for when words start with a vowel
        } else if (eachWord.substring(0, 2) === "qu") {
          const restOfWord = eachWord.slice(2)
          console.log(restOfWord)
          return restOfWord + "quay" // for when words start with "qu"
        }
        // else if (checkQ === "q") {
        //    const restOfWord2 = eachWord.slice(0, firstVowelLocation + 1)
        //    return `${restOfWord2} ay`       -> Work in progress for how to move qu with consonants 
        // }
        // const arr = []
        // const str = "squeal".slice(0, 3)
        // arr.push(str)
        // console.log(arr)

        // e, a, l + squ + ay

        //squeal : squ - eal since im splitting the word after u i need to know where the index of u is. 
        // final word needs to be: ealsquay
        
      
      // pseudo code: for the qu-functionality
      // input: user's input - a word that starts with qu
      // output: a word that has the first syllable with "qu" at the end plus "ay"
      // process: look through each word and find the "qu", move the "qu" to end and then add "ay" to the end, we need to use or reference the arrayOfUserInput
      // 

      
      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord;
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />
  
        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Adrian & Aleja</footer>
    </div>
  )
}

export default App
