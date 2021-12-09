import React, { useState, useCallback, useRef} from 'react';
import {
    ContactBlock,
    PersonImage,
    ContactDetails,
    PersonImageSkeleton,
    NameSkeleton,
    AddressSkeleton,
    MobileNoSkeleton,
    EmailSkeleton,
} from './ContactListPage.style';
import PersonImageSrc from '../../../media/person.png';

function ContactListPage() {    
    const [contactsId, setContactsId] = useState(['00', '01', '02', '03', '04', '05', '06', '07']);
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
    const [loading, setLoading] = useState(false);
    const observer = useRef();

    const lastContactRef = useCallback(element => {
        if (loading) return

        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            setLoading(true);

            setTimeout(() => {
                var tempContactsId = contactsId;
                for(var i=0; i<8; i++){
                    tempContactsId.push(tempContactsId.length);
                }
                setContactsId(tempContactsId);
                setLoading(false);
            }, 1000);
          }
        })

        if (element) observer.current.observe(element)
      }, [loading]);

    return (
        <>
            {contactsId.map((contactId, index) => {
                return (
                    <ContactBlock ref={contactsId.length === index + 1 ? lastContactRef : null} key={contactId}>
                        <PersonImage src={PersonImageSrc} alt="person"/>
                        <ContactDetails>
                            <div>Sanket Savaliya</div>
                            <div>
                                B-2, Shangar Vatika, Near Shangar hall, Opp. Aaji police station,
                                Kothariya main road, Rajkot-360002, Gujarat.
                            </div>
                            <div>8488877445</div>
                            <div>savaliyasanket1998@gmail.com</div>
                        </ContactDetails>
                    </ContactBlock>
                );
            })}
            {loading && skeletons.map(skeleton => (            
                <ContactBlock key={skeleton}>
                    <PersonImageSkeleton />
                    <ContactDetails>
                        <NameSkeleton />
                        <AddressSkeleton />
                        <MobileNoSkeleton />
                        <EmailSkeleton />
                    </ContactDetails>
                </ContactBlock>    
            ))}
        </>
    );
}

export default ContactListPage;
