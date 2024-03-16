# Web Development Project 3 - _Flashcards_

Submitted by: **Vanessa Tang**

This web app: **contains flashcard with questions about the Virtual YouTuber, Hoshimachi Suisei. The user can click on the next button to move onto the next question as well as the previous button to go back to a question (the previous button is disabled on the first card and the next button is disabled on the last card). There is also a shuffle button to shuffle the deck at any time. Users can make a guess on the answer for the card and a visual cue will show them if the answer is correct or not. An answer may be marked as correct even if it is slightly off.**

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

-   [x] **The user can enter their guess in a box before seeing the flipside of the card**
-   [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
-   [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
-   [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

-   [x] A shuffle button is used to randomize the order of the cards
-   [x] A user's answer may be counted as correct even when it is slightly different from the target answer
-   [x] A counter displays the user's current and longest streak of correct responses
-   [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

-   [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with [Kap](https://getkap.co/)

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

The main issue I ran into is getting fuse.js to work with answers that involve dates. Sometimes, it scores the incorrect dates too well and marks it correct when it should not be. In the end, I just decided to check the dates in a different way using date objects, so if someone enters the date in a different format, it will still be marked as correct if the date is the same. Other than that, I did not really struggle since I basically completed half of the required functionalities without knowing during the previous part so I only had to add little to this part.

## License

    Copyright [2024] [Vanessa Tang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
