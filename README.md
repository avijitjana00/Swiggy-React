## episode-04
 1. added nav bar
 2. added logo
 3. added restaurant card component
 4. applied css on restaurant card component 
 5. handled dynamically restaurnat information - name, image, cuisines, rating, price, delivery time
 6. props
 7. used map to looping all restaurant details + unique key passed in component

## episode-05
 1. React Hooks - this are normal js function which given by react.
 2. Hooks types - (i) useState (ii) useEffect
 3. useState - local state variable - super powerful variable
 4. Reconciliation
 5. ReactFiber
 6. DOM(Document Object Model)
 7. Virtual DOM - representation of actual DOM

## episode-06
 1. monolith vs. microservice architectre 
 2. fetch live data using swiggy api
 3. useEffect(), which takes two args (i) callback function (ii) dependancy array
 4. cors - cross origin resource sharing
 5. shimmer UI - load fake page until get the actual data from api
 6. conditional rendering
 7. imortants of use local state variable(useState variable) instead of use normal javascript variable

 ## episode-07
  1. useEffect hook concept -
    a. If no dependency array passed inside useEffect hook then on each render useEffect will be called
        eg-> useEffect(()={

        })
    b. If empth dependency array passed inside useEffect then only on initial(just once) render useEffect will be called.
        eg-> useEffect(()=>{

        },[])
    c. If dependency array passed inside useEffect then only when component get updated useEffect will be called.
        eg-> const [searchText, setSearchText] = useState([])
             useEffect(()=>{

             },[serchText])

 2. Do's and Don't useState -
    a. Don't create state variable outside the component
    b. Always create useState variable on top
    c. Never use state variable inside if else condition, It will create inconsistance in your program
    d. Never use state variable in for loop.

 3. Route configuration - 
    a. import createBrowserRouter from react-router-dom library
    b. createBrowserRouter takes some configuration -> It's a list array of object. each and every object define a diff path and what should happen on that path
    c. import RouterProvider from react-router-dom library -> RouterProvider provides the routing config to our app
    d. we can handle errorElement by usign useRouteError hook, provided by react-router-dom
    e. set children route
    f. Dont use anchor(<a> tag), use <Link> gives by react-router-dom
    g. client side routing vs. server side routing
    h. to handle dynamic id from url/api react provided useParams hook get from react-router-dom

## episode-08
 1. class based component
 2. diff b/w class based component vs. functional component
 3. way of access props in class component
 4. use of constructor() and super() method in class component
 5. create state variable in class component
 6. update state variable in class component
 7. Life cycle of react class component. ref - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 8. componentDidMount(), componentDidUpdate(), componentWillUnmount()

