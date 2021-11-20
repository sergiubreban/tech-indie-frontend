import { FC } from "react"
import MenuBar from "./MenuBar"

const Layout: FC = (props) => {
  return <div>
    <MenuBar />
    {props.children}
  </div>
}

export default Layout