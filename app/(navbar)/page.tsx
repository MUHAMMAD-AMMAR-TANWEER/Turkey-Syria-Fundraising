"use client"
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Image from "next/image";



export default function Navb(){
    const collapseItems:string[] =["aces"]
    return(
        <div>
            <Navbar isBordered variant="floating">
                
                
                <Navbar.Content hideIn="xs" variant="highlight-rounded" >
                    <Navbar.Link href="#">Home </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Donate</Navbar.Link>
                    <Navbar.Link href="#">Activities</Navbar.Link>

                </Navbar.Content>
                        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
                
            </Navbar>
        </div>
        )
}