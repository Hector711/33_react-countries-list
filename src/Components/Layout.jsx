const Layout = ({ children }) => {
  return (
    <div id="layout" className="flex flex-col items-center mt-20 w-full p-0">
      {children}
    </div>
  )
}

export default Layout