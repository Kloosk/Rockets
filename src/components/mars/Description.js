import React from 'react';
import styled from 'styled-components'

const Container = styled.article`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 25px 25px 25px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
  width: 11px;
  height: 11px;
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0 none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-track {
  background: #0D0D0D;
  border: 0 none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #787878;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;
const H1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-top: 15px;
  :first-child{
    margin-top: 0;
  }
`;
const P = styled.p`
  font-size: 0.8rem;
  color: #fff;
`;
const Description = () => {
    return (
        <Container>
            <H1>WHY MARS?</H1>
            <P>At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors. Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day is remarkably close to that of Earth.</P>
            <H1>STARSHIP</H1>
            <P>Starship will be the world’s most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit. Drawing on an extensive history of launch vehicle and engine development programs, SpaceX has been rapidly iterating on the design of Starship with orbital-flight targeted for 2020.</P>
            <H1>TO MARS AND BACK</H1>
            <P>Together the Starship spacecraft and Super Heavy rocket create a reusable transportation system capable of on orbit refueling and leveraging Mars’ natural H2O and CO2 resources to refuel on the surface of Mars.</P>
            <H1>ON-ORBIT REFILLING</H1>
            <P>Starship leverages tanker vehicles (essentially the Starship spacecraft minus the windows) to refill the Starship spacecraft in low-Earth orbit prior to departing for Mars. Refilling on-orbit enables the transport of up to 100 tons all the way to Mars. And if the tanker ship has high reuse capability, the primary cost is that of the propellant, and the cost of oxygen and methane is extremely low.</P>
            <H1>LANDING ON MARS</H1>
            <P>Starship will enter Mars’ atmosphere at 7.5 kilometers per second and decelerate aerodynamically. The vehicle’s heat shield is designed to withstand multiple entries, but given that the vehicle is coming into Mars’ atmosphere so hot, we still expect to see some ablation of the heat shield (similar to wear and tear on a brake pad). The engineering video below simulates the physics of Mars entry for Starship.</P>
        </Container>
    );
};

export default Description;