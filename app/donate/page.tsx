"use client"

import { Text, Image, Spacer , Card , Grid, Button} from "@nextui-org/react";
export default function Donate(){

    const MockItem = ({ text }) => {
    return (
      <Card isHoverable variant="bordered" css={{ h: "$80", $$cardColor: '$colors$error' }}>
        <Card.Body>
          <Text h6 size={24} color="white" css={{ mt: 20 ,ml:50}}>
            {text}
          </Text>
          <Button color="gradient" auto css={{ mt: 130 }}>
                Donate
          </Button>

        </Card.Body>
      </Card>
    );
  }
    return (
<>

        
    <Grid.Container gap={10} justify="center">
      <Grid xl={10}>
        <MockItem text="Donate with FIAT" />
      </Grid>
      <Grid xl={10}>
        <MockItem text="Donate with Crypto"  />
      </Grid>

    </Grid.Container>

        

        </>
    )
}