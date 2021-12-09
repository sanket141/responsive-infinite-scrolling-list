import styled, { keyframes } from 'styled-components';

const ContactBlock = styled.div`
    position: relative;
    margin-left: 5vw;
    margin-top: 2vw;
    font-size: 2vw;
    color: #808080;
    border: 0.1vw solid #808080;
    border-radius: 1vw;
    width: 80vw;
    padding: 2vw 2vw;
`;

const PersonImage = styled.img`
    position: relative;
    margin-left: 2%;
    margin-top: 2vw;
    width: 11vw;
    height: 10vw;
    display: inline-block;
`;

const ContactDetails = styled.div`
    position: relative;
    margin-left: 5%;
    border-radius: 1vw;
    width: 58vw;
    display: inline-block;
`;

const shine = () => keyframes`
    to {
        background-position: 100% 0, 0 0;
    }
`;

const Skeleton = styled.div`
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      lightgray;
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: ${shine} 1s infinite;
`;

const PersonImageSkeleton = styled(Skeleton)`
    position: relative;
    margin-left: 2%;
    margin-top: 2vw;
    width: 11vw;
    height: 10vw;
    display: inline-block;
`;

const NameSkeleton = styled(Skeleton)`
    width: 13vw;
    height: 1.5vw;
    margin-top: 1vw;
`;

const AddressSkeleton = styled(NameSkeleton)`
    height: 3vw;
    width: 53vw;
`;

const MobileNoSkeleton = styled(NameSkeleton)`
    width: 11vw;
`;

const EmailSkeleton = styled(NameSkeleton)`
    width: 26vw;
`;

export {    
    ContactBlock,
    PersonImage,
    ContactDetails,  
    PersonImageSkeleton,
    NameSkeleton,
    AddressSkeleton,
    MobileNoSkeleton,
    EmailSkeleton,
};
