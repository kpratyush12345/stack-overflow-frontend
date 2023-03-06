import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat."
    },
    {
        id: 2,
        tagName: "python",
        tagDesc: "Python is an interpreted, interactive, object-oriented programming language. It incorporates modules, exceptions, dynamic typing, very high level dynamic data types, and classes. It supports multiple programming paradigms beyond object-oriented programming, such as procedural and functional programming."
    },
    {
        id: 3,
        tagName: "c#",
        tagDesc: "C# is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers."
    },
    {
        id: 4,
        tagName: "java",
        tagDesc: "Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today."
    },
    {
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by The PHP Group."
    },
    {
        id: 6,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables."
    },
    {
        id: 7,
        tagName: "android",
        tagDesc: "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets."
    },
    {
        id: 8,
        tagName: "css",
        tagDesc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
    },
    {
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development."
    },
    {
        id: 10,
        tagName: "Node.js",
        tagDesc: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser."
    },
    ]
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
                <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
                <div className='tags-list-container'>
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Tags