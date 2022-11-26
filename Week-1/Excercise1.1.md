# Exercise 1.1

## Main functionality of the browser

- ### Type the address in the URL
    when someone type the URL "https:www.google.com"
    here the https:// is the scheme and https stands for Hyper Text Transfer protocol secure, this directs the browser to connect to the server using TLS which is an encryption protocol. HTTPS make the data shared over it will be encrypted, there are other protocols as well like ftp, mailto etc.

    google.com is the domain name of the site, this directs to a specific static IP address
    there can be additional path to the resource in URL, which can direct to a specific file on the server Like some static file like HTML CSS etc.

- ### Browser looking up for the IP address
    Now the browser looks up for the ip address which is associated with the domain name, using the DNS Lookup to increase the speed the DNS data is cached at different layer. between the browser and the server
    - browser checks for the local cache.
    - It looks for in the local OS cache.
    - It looks for the local network router cache.
    - It looks for cache on the corporate network.

    The browser does an iterative DNS lookup

- ### Initiating a TCP connection with the server

    The public internet routing infrastructure is used to packets are requested from the server routed through the router then ISP and then an internet exchange using Transmission Control Protocol to find the server to connect with.

    A better option is used by many sites which is called CDN(Content Delivery Network) which caches static content closer to the browser, A CDN is a globally distributed network of caching server to improve the performance.

    Once the server is found, a TCP connection is established and if the HTTPS is used then TLS handshake also takes place

- ### Browser Sends the HTTP request to the sever
    It starts with the browser send HTTP request to request the content of the page, 
    the request method can be of different type like GET, POST, PUT, PATCH, DELETE.
    
    The server send the response back with a status code which tells the status of the response.The response statuc code can be of various types.

    - 1XX code  - the request is received and process is continued.
    - 2XX code - Succesful Response code.
    - 3XX code - Redirection is taking place to another URL.
    - 4XX code - Error on client's part.
    - 5XX code - Error on the server side.
 
- ### Content received is displayed on the Browser
    After the GET request, the browser receives the content and information about the content type. and the browser parses and renders the content, more information is given below about how the content is parsed and rendered.   

## High Level Components of Web Browser

The Main components of a web browser are

- ### The user Interface
    This includes the address bar, buttons to render forward or backward in an website, bookmarks and every other thing in the browser other than the window to see the details of the requested page.

- ### The Browser Engine
    It basically acts as a bridge between the user interface and the rendering engine.

- ### Rendering Engine
    As the name suggests the rendering engine basically renders the content that is requested. If the content is HTML , XML then, the engine parses the HTML and CSS and displays the content on screen.

- ### Networking Component
    This Component deals with every aspect of the Internet communication and security, It can also implement cache which will reduce network traffic.It basically retrieves URL using the HTTP (Hyper Text Transfer Protocol) or FTP ( File Transfer Protocol) internet protocols.

- ### JavaScript Interpreter
    As the name suggest, it is basically used to parse the javascript code in the content received and if by chance the javascript file is external, then the file content is fetched and the interpreter waits until the information is received and the the javascript interpreter send the parsed information to the Rendering Engine.

- ### UI Backend Component
    It basically is used for drawing basic widgets like combo boxed and windows.It exposes the generic interface that will not be platform specific, it uses os interface underneath.


- ### Data Persistence/Storage
    It basically is a small database which is created on the computer locally in the similar location where browser is installed. It saves user data such as cookies, caches, bookmarks and other browser related stuff. The inforamtion is stored in local storage, indexedDB, WebSQ and FileSystems. 

## Rendering Engine

- ### What it is 
    So Rendering Engine Basically renders the content that is received by the browser, basically rendering engine can display HTML/XML documents and it also displays images.And can also display other file types using plugins and extensions, different browsers have different rendering engines Like trident for internet explorer, Gecko for Firefox, webkit for safari etc. 

- ### Role of Rendering Engine
    As the user requests a particular document, the rendering engine fetches the information and the content requested via the networking layer, the rendering engine receives the content in 8KBs chunks.

    The first things that rendering engine will do is parsing the HTML document and converts the elements to the DOM nodes in a tree called the content or DOM tree

    While the DOM tree is constructed, the browser constructs another tree called render tree. The render tree is basically of the visual elements in the order of them displaying, a kind of visual representation of the document.Render tree is basically Styling information together with the visual instructions in HTML.

    After the render tree is formed it goes through a layout process, which basically means to give the coordinates how the elements should appear on the screen.

    After the render tree, is formed, the next step is basically painting, In this stage the render tree is traversed and the renderer's paint function displays all the content on the screen using UI Backend Layer.

    To improve the user experience the rencering engine basically displays the content as soon as possible, It will not wait until all the HTML is parsed, before starting to build and layout the render tree, received content will be parsed and displayed until the process of receiving the information from network and parsing continues. 

## Parsers
    Parsing is the one of the most important process within the rendering proces,parsing a document basically means translating it to a structure the code can use, parser results in a tree of nodes that represents the structure of the document, called as parse or syntax tree.

    Parsing is based on the syntax rules called the grammer. Parsing can be roughly divided into lexical and syntax analysis.

    lexical analysis is done by the lexer or tokenizer, which involves breaking the input into tokens, tokens are the vocabulary of the language or the lowest unit which has some meaning like dictionary words in grammar.

    Syntax analysis is applying the grammar rules 

    The parsing is and iterative process. There can be one more process after the parse tree which is called the translation, which basically means transforming the document into another format like compiler converts the parse tree into machine code.

- ### HTML Parser
    After feteching the data, the browser say receives the HTML content that needs to be displayed, the browser will start parsing the data.

    parsing will basically mean, taking the content as text and converting it into the form that the browser can understand.It will be basically done by browser engine.

    browser engine basically combines the structure HTML and CSS, to display the content on the page.It also checks for the interactive components on the screen.

    HTMl parser basically has two steps, tokenization and tree contruction

    The end result of the tokenization is 0 or more of the tokens, startingTag and ,EndingTag, attribute names, value, comments, characters or plain text content.

    After tokenization, tree building starts, Which essentially is creating a tree like structure(which is called a Document Object Model), the html is the first tag and basically the root node of the tree.The tree is a representation of the hierarchies and relationships between different tags.Greater number of nodes , more time it will take to make the DOM.

    The building stage is renentrant, meaning if one token is being handled then tokenizer, will resume causing further tokens to be emitted and processed

    The parser goes from top to bottom, and works line by line and if any non-blocking resource (Like Image) is encountered then, the browser will request that item and continue parsing, On the other hand, if there is a blocking resource (CSS, javascript), then the parsing stops , until the resource gets downloaded.

    That's why the javascript is recommended to be added at the end.
    Here pre loader is helpful, as it works by going to every resource, so that it gets downloaded until the HTML Parser reaches there..

- ### CSS Parser
    Here the CSS Praser converts the text after tokenization into something called CSSOM, 
    So that be the CSS styling be external or embedded, CSSOM and DOM are just different data structures, that work similarly. Building the CSSOM out of CSS is considered a render-blocking process

    CSS Parsing basically starts with tokenization. The CSS Parser takes the bytes and converts them into characteristics, then token and then nodes of CSSOM. The browser does something called selector machting which means that each set of styles will be matched against all nodes (elements) on the page.

    The browser if the body elements are inherited by child elements, and the the most specific rules are applied.Here the nested elements have their own styles as well as the styles inherited from the parent, and if the styles coincide then, then styling of child nodes is applied.

    These rules are basically decided by specificity.

## Script Processing and Order of Script Processing

    Basically what happens, is that the model of the web is synchronous, and whenever the browser encounters a script tag, then it halts the parsing until the script is processed, and if the script is external, then it is requested from the network, synchronously and once downloaded, it continues the parsing.

    There is a way through it, using async function or defer attribute in this case the script tag will work asynchronously, and the parsing won't wait for the processing of the script.

    One more way to handle this is speculative parsing, there is another additional parser,that goes to every blocking element script and if it is external downloads it from the network, so in this way there is a parallel threading that improves the speed.

    Similarly style sheets also acts as a blocking element and is one of the corner case. Because if any script asks for the style information then it should have been already parsed by the parser other wise the script will get wrong information.


## Tree Construction
    While the DOM tree construction is taking place, there is another tree that is constructed that is called the render tree, which basically is a tree of visual elements, in the order in which they need to be displayed, it is basically a visual representation of the document to enable the painting of the content in the correct order.

    The renderer basically corresponds to the DOM tree, but the relation is not one to one. Non-visual elements of the DOM are not inserted in the render tree, and the elements while display value is none are also not inserted into the render tree

    Render tree also calculates the visual properties of each render object and it is done by style component of each element.


## Layout 
    When the renderer is created it basically does not have position and size attributes, calculating these values is basically called Layout.

    HTML basically follows flow-based layout system, and the geometry is computed in a single pass, as latter elements does not change the geometry of the former elements.So layouting happens from left to right and top to bottom.

    The layout uses top and left coordinates.

    One should know that the layout is a recursive process, and it goes through the tree hierarchy

    The root render has a coordinate of(0,0) anf the dimension are the viewport which is the viewing window or viewing area.

    Below is the layout Process.

    - Parent render will determine its own width.
    - Going in the hierarchy, the parent will go over children and Place the children renderer.
    - Next the parent will use the accumulative height, margin and padding of the child element to determine it's own height.which in turn will be used by it's own parent to determine it's own height.

## Painting
    Next step after the layouting is the Painting which whihch basically uses the paint method to display the content on the screen, It uses the UI infrastructure component.

    The painting can be global as well as incremental.
    global being the entire tree is painted and incremental being some of the renderers change in a way that does not affect the entire tree.

    There is a specific order in which the element is stacked as follows
    - Background color
    - background image
    - border
    - children
    - outline

    Browser try to do the minimal actions if there is response to change, so if a change to elements will only cause change in that element.

    Increasing the font size of the "html" will cause relayout and repaint of the entire tree.









