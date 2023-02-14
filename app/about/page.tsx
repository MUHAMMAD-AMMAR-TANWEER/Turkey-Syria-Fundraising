"use client"
import { Text, Image, Spacer , Card , Grid} from "@nextui-org/react";


export default function About() {

    const MockItem = ({ text , text2}) => {
    return (
      <Card isHoverable variant="bordered" css={{ h: "$40", $$cardColor: '$colors$error' }}>
        <Card.Body>
          <Text h6 size={24} color="white" css={{ mt: 20 ,ml:100}}>
            {text}
          </Text>
        <Text h6 size={24} color="white" css={{ ml:170}}>
            {text2}
          </Text>
        </Card.Body>
      </Card>
    );
  }
    return (
        <>
        <Text size={40} css={{textAlign:'center', margin:'40px 40px'}} weight="bold">BACKGROUND </Text>
        <Text size={24} css={{textAlign:'center', margin:'40px 40px'}}>
            On 6 February 2023, an earthquake struck southern and central Turkey, and northern and western Syria.It occurred 34 km (21 mi) west of the city of Gaziantep at 04:17 AM TRT (01:17 UTC), with a magnitude of at least Mw 7.8, and a maximum Mercalli intensity of XI (Extreme). An unusually strong Mw 7.7 aftershock occurred nine hours after the mainshock 
            centered 95 km (59 mi) to the north northeast in Kahramanmaraş Province. There was widespread damage and tens of thousands of fatalities.
        </Text>
                {/* <Image
          src="turkeyEarthquake.png"
          alt="EarthQuake Image"
          width={1000}
          height={1000}
          
        /> */}
        <Text size={40} css={{textAlign:'center', margin:'40px 40px'}} weight="bold">CURRENT SITUATION </Text>
    <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
        <MockItem text="Total Number of Deaths" text2="37,000" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="Total Building Collapse" text2="6500" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="People Displaced" text2="590,000"/>
      </Grid>
    </Grid.Container>

        

        </>
        )
}