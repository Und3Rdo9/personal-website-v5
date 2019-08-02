_In this second article of the series about good internationalisation practices for website developers, we discuss text direction. Make sure you check out part 1 about [character encoding and fonts](http://timbakkum.net/frontend-blog/internationalisation-web-developers-characters-fonts) too!_ You probably won’t have even thought of text direction, that is until you have to deal with a language that does not use the default html5 left-to-right direction. (Check out the html5 spec for the rules that determine the [directionality](https://www.w3.org/TR/html5/dom.html#the-directionality) for any element.) There are a great number of right-to-left scripts in the world, amongst which the most well-known ones are the Arabic, Hebrew and Persian scripts. Let’s look at what the basics are when internationalising a website for languages with different directions.

## **Overriding the default html text direction**

The basics of text direction are quite simple. Take for example the homepage of the Wordpress website. [The Farsi (Persian) version of the homepage](https://fa.wordpress.org/) correctly displays the content in a right-to-left direction. If you inspect the html source code, you will notice that the only difference with the default English language, [left-to-right, version of the site](https://wordpress.org) is the addition of a dir attribute on the html tag, like so :

    <html xmlns="http://www.w3.org/1999/xhtml" dir="rtl" lang="fa-IR">

This tag tells the Unicode Bidirectional Algorithm in what order the text should be rendered and how it should be aligned. This also means that things such as bullet points lists and tables are automatically “flipped” as well. The language attribute lang in no ways tells the browser the orientation of the script, so this should always be specified.   Note as well that the right-to-left text in html is stored in the logical order as opposed to the visual order as the dir attribute does not change the order of characters within a word. [Always prefer the logical order over the visual order](https://www.w3.org/International/questions/qa-visual-vs-logical).

## **What does The Unicode Bidirectional Algorithm do?**

If we have a look at what big websites use to display elements with mixed text directions, one things stands out. Take this [product page of a book with a bilingual title](https://www.bol.com/nl/p/sleep-tight-little-wolf-bilingual-children-s-book/9200000050210836/) from the Dutch online shop bol.com, combining both left-to-right and right-to-left text.
![](https://media.graphcms.com/eqHp8PaQR7u8kGtZKTW7)
If we inspect the page’s html, we notice that there is no specific markup that indicates the change in direction, such as the bdo or bdi tags, or the dir attribute (all of which we will discuss later). We don’t notice a dir attribute on any element either, therefore the text-direction of the entire document will be left-to-right. If we copy the html of the bilingual title into our code editor, the order of the persian text changes back to left-to-right. See the following screenshot : ![](https://media.graphcms.com/oz04tz1dQcGnHGpPChAD) So how come the right-to-left script text is automatically in the right direction when this code is viewed in the browser?   The answer lies in the Unicode Bidirectional Algorithm that each browser uses to determine how text should be displayed. The behaviour of the algorithm can be overwritten by the [unicode-bidi css property](https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi), which some browsers, like Firefox, do (check out the firefox user agent stylesheet).  Each Unicode character has information about its directionality stored inside the character itself. The Unicode Bidirectional Algorithm uses this information to decide how to render the text. Latin characters are strongly typed as left-to-right, meaning that a word consisting of latin characters will automatically display from left-to-right. The Farsi script in the example above is strongly typed as right-to-left, so it will display accordingly, even if it is surrounded by left-to-right text.   There are also so-called neutral or weak characters, such as punctuation, numbers and spaces. If we look at our phrase above, we notice that the full-stop comes after the Persian right-to-left. Because the text that follows is strongly typed as left-to-right (Bilingual), the neutral full-stop is treated as if it had the base directionality of the document. If this weren’t the case, and the full-stop was in between two strongly right-to-left typed characters, it would have acquired right-to-left directionality and would therefore move to the end of the right-to-left sequence (the left). If something goes wrong with your rendering of bidirectional text, it is usually to do with neutral typed characters. In the next section we will have a look at the techniques to prevent these kind of issues.

## **Tools and techniques for manually mixing text orientations**

Once your base direction has been established on a document level, you will only need to override the default when you have an element that contains text with a different orientation. There are several ways to do this. Check out the video tutorial below for a quick introduction. https://www.youtube.com/watch?v=dBzHKAYdSkY As you can see in the tutorial video above, it is more complicated than it seems. It might indeed be clearer to use some real right-to-left text within a left-to-right document to illustrate this technique. I’ve created a document with all the [different examples](http://timbakkum.net/code-examples/bidi-examples). The first example shows how the text direction and alignment changes when applied to a block level element.

### **The bdo tag**

The most semantic tag we can use is the [bdo tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo) if you want to change the direction of inline text. The dir attribute is required on this element. Here’s is the code from the [second example](http://timbakkum.net/code-examples/bidi-examples):

    <p>I speak English but I don't speak <bdo dir="rtl" lang="fa">فارسی</bdo> unfortunately.</p>

Instead of using the bdo tag, you can use any other tag, like a span tag, and specify a dir attribute, but bdo is preferred for semantics.

### **The bdi tag**

Bdi stands for [Bi-Directional Isolation Element](https://developer.mozilla.org/nl/docs/Web/HTML/Element/bdi) and gives us the possibility to let the Unicode Bidirectional Algorithm automatically decide to change the text-direction of the content based on the content of the tag. This is especially useful for developers when inserting text from a database with an unknown  script direction. Unfortunately, this tag is not very well supported by all browsers. Internet Explorer (supported in Edge though!), Safari and Opera do not support this feature at the time of writing. Check out the [third example](http://timbakkum.net/code-examples/bidi-examples) and notice that we don’t need to specify the text direction on the bdi element, however it is allowed if you know the direction needed.

### **dir=auto**

New in html5 is the possibility to set the dir attribute to auto. The Unicode Bidirectional Algorithm looks at the first character in an element to determine whether it’s a left-to-right or right-to-left script. Any following elements that have the dir attribute are ignored as well as any bdi elements. This option can also be very useful for developers that make themes or templates that need to be multilingual ready. Just think about what this feature could do for the user experience of your form fields..!

## **Possible issues**

A lot of possible combinations of bidirectional text can occur and so can a lot of issues. W3C has done extensive studies on these different combinations and case studies and ways to resolve them. If you have specific case to deal with as a developer, please consult their [html 5 direction isolation test results](https://www.w3.org/International/tests/repo/results/the-dir-attribute-isolation). Let’s have a look at the most common causes of problems with bidirectional texts.

### **Doubly embedded bidirectional text (nested bidi)**

Text with a different direction can appear anywhere, so that means it can occur in your opposite-direction text. Say for example, your main website language is English, you might need to embed opposite-direction, right-to-left, scripts. Think about product names, titles, quotes, etc. these phrases might have opposite-direction text in them too! Have a look at the [fourth case](http://timbakkum.net/code-examples/bidi-examples) of the example page. An opposite-direction sequence is embedded in another one. To ensure that the second embedded sequence is displayed correctly and doesn’t affect the direction of any weak characters directly adjacent, be sure as a developer to wrap it in a tag and specify its directionality if possible.

### **Weak characters**

Take a look the following product on the [arabic version of wordpress.org](https://ar.wordpress.org/). Can you spot the localisation mistake? In the third section we see the use of the word Notepad++, a left-to-right sequence, embedded in a right-to-left page (see screenshot below). ![](https://media.graphcms.com/x2zzZlHnTXK2HnA2vkCs)If we inspect the code, we don’t see any special measures for the display of the opposite direction English text and most of it renders fine.

    <p>2\. افتح ملف wp-config-sample.php في أي محرر نصوص يدعم الترميز utf-8 واملأه بإعدادات الاتصال بقاعدة البيانات ( نحن ننصح باستخدام المحرر Notepad++ ) .</p>

But the browser displays the two plus signs as if they were part of the Arabic text, because they are weak characters in a right-to-left direction document. The algorithm doesn’t know that the two numerical characters are part of the left-to-right sequence. To resolve this issue, we can use a bdo or bdi tag to override the algorithms automatic behaviour.

## **Conclusion**

There are many more cases that can cause issues, but most of the work should be done by the Unicode Bidirectional Algorithm. As a developer, make sure that your data is stored in a logical order and not a visual order. If necessary use the algorithm and the overrides techniques that we have covered in this article to adapt the output, and avoid css when doing so. As always, make sure that you let native speakers review your localised website in order to ensure there aren’t any mistakes that you wouldn’t have spotted yourself.   Have you ever had any issues when dealing with (multiple) text directions? Share your thoughts with us in the comments!
