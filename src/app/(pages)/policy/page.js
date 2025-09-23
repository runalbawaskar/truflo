import Navbar from "@/app/components/Sections/Navbar/Navbar";
import LeadForm from "@/app/components/Sections/LeadForm/LeadForm";
import Footer from "@/app/components/Sections/Footer/Footer";

import InfoDisplay from "@/app/components/UI/Info/InfoDisplay";

import {Suspense} from "react";

function Policy() {

    const data = [
  {
    "id": "introduction",
    "title": "INTRODUCTION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm Solutions Private Limited (“Amplicomm” or “Us” or ”our”) is committed to protecting your privacy. Please read this Privacy Policy carefully to learn more about how we collect and use your information.",
          "The Privacy Policy read with the Terms of Use, governs your interactions with the Amplicomm Analytics Platform and/or the Amplicomm Services offered on our application and/or our website at Truflo.ai, as well as your professional interactions with Amplicomm.",
          "By using the Amplicomm Analytics Platform and/or the Amplicomm Services, submitting information to Us or signing up for any services offered by Us, you agree and consent to Amplicomm, as well as our respective representatives collecting, using, disclosing and sharing amongst themselves your Data, Personal Data, non-PII and disclosing such Data, Personal Data and non-PII to our authorised service providers and relevant third parties in the manner set forth in the Privacy Policy.​"
        ]
      }
    ]
  },
  {
    "id": "definitions",
    "title": "DEFINITIONS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          {
            "text":"The following expressions shall, unless the otherwise expressly stated, bear the following meaning:",
            "subItems": [
                "“Data“ means any data you may provide to us via Amplicomm Analytics Platform or as part of the Amplicomm Services and this includes any data we may access from you or your respective third party accounts, such as ad campaign data, device data and location data (which is set out in further detail below). Further, it includes Personal Data and Non-PII.",
                "“Amplicomm Analytics Platform“ means the Saas based platform ‘Truflo’ developed and designed by Amplicomm to give customers analytics & insights on sales, user sessions, advertising, product, inventory and supply chain optimization.",
                "“Non-PII“ means any information that cannot be used to identify a particular individual and, for the avoidance of doubt, includes Data which is not Personal Data.",
                "“Personal Data“ means any data or information which either jointly with other data or on its own can be relating directly or indirectly about you (or any person) from which you (or such person) can be identified either (a) from that data; or (b) from that data and other information to which we have or are likely to have access including any sensitive personal data and expression of opinion about you. For the avoidance of doubt Data may also be Personal Data.",
                "“Privacy Policy“ shall mean this policy and shall include all such further and future amendments.",
                "“Process/ Processing“ shall mean any dealings by Us with the Data, Personal Data and Non-PII including but without limitation to the collection, recording, holding, storing, use and disclosure of the Data, Personal Data and non-PII and shall further include, but not be limited to, the organisation, adaptation, alteration of the Data, Personal Data and Non-PII, the access to, retrieval, consultation or use of the Data, Personal Data and Non-PII, the disclosure of the Data, Personal Data and Non-PII by transmission, transfer, dissemination or otherwise making available or the alignment, combination, correction, erasure or the destruction of the Data, Personal Data and Non-PII.",
                "“Amplicomm Services“ means any services and/or products and/or a combination of both provided through ‘Truflo’, or Amplicomm’s authorised agents, authorised affiliated partners or associates and shall include the Amplicomm Analytics Platform. Any references to “Amplicomm Services” in the Privacy Policy shall mean all of the Amplicomm Services or any of them as the context requires.",
                "A reference to “person(s)” shall include any company, partnership, individual person, firm, joint venture, association, entity, statutory body, unincorporated body of persons, trust, bureau, minister, agency, instrument, court, regulatory body, government or state, any authority or other body corporate and vice versa.",
                "A reference to “you“ or the “user“ is a reference to a user of any of the Amplicomm Analytics Platform and/or the Amplicomm Services.",
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "informationCollected",
    "title": "WHAT INFORMATION WE COLLECT AND HOW WE MAY COLLECT YOUR INFORMATION?",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          {
            "text": "We may collect your Data, Personal Data or Non-PII in various ways including but not limited to those described below. If you wish to stop and/or prohibit us from collecting your Data, Personal Data or Non-PII, we may no longer be able to provide the relevant Amplicomm Services to you.",
            "subItems": [
                "During any signing-up/registration process - any personal information provided by you if you sign up or register for anything on the Amplicomm Analytics Platform and/or the Amplicomm Services.",
                "From your use of the Amplicomm Analytics Platform and/or the Amplicomm Services – when using the Amplicomm Analytics Platform and/or the Amplicomm Services we will ask you, among other things, to provide Data, Non-PII and your Personal Data such as your preferred language, your email address, your mobile number or other unique device identifiers assigned to your device and ad campaign data.",
                "The information we collect may also include, among others, the browser that you are using, the IP address of your device, areas of the Amplicomm Analytics Platform that you visit and time of the day of your visit. In addition, tracking information may be collected as you navigate or use the Amplicomm Analytics Platform and/or the Amplicomm Services. For users who are using the Amplicomm Analytics Platform and/or the Amplicomm Services and switch on the location services, the location of your mobile device/other apparatus and movement thereof may be captured. You acknowledge that Amplicomm is not in any way responsible for the accuracy, completeness or reliability of the Data, Personal Data or Non-PII collected in this manner and Amplicomm accepts no liability in respect of it.",
                "We may collect and store other Personal Data such as your bank account details or any debit or credit card details with respect to any payment of fees done by you, when using the Amplicomm Analytics Platform and/or the Amplicomm Services. We reserve the right to change our payment channels at any time for any reason.",
                "We may also collect and store Personal Data being your social media account details including your log-in information for various websites and portals. If you prefer to not share this Personal Data with us in the future, you have the option to update your login information independently. This will ensure that we no longer have access to your accounts on the respective social media platforms or websites.",
            ]
          }, 
          "In addition to this Data, Personal Data and Non-PII and in accordance with applicable law, we and/or our third-party service providers may use a variety of technologies that automatically (actively or passively) collect certain Data, Personal Data and Non-PII whenever you visit, use or interact with the Amplicomm Analytics Platform and/or the Amplicomm Services, including but not limited to APIs and data scraping tools. For the avoidance of doubt, such information may be collected by us from your Data, Personal Data or Non-PII within your account on the Amplicomm Analytics Platform, howsoever your information lies within your account (be it directly on the Amplicomm Analytics Platform or on third party sites linked to your account).",
          "We only access Data, Personal Data and Non-PII that we need to be able to provide the Amplicomm Analytics Platform and Amplicomm Services as set out in the Terms of Use and the Privacy Policy."
        ]
      }
    ]
  },
  {
    "id": "purposeOfCollecting",
    "title": "PURPOSE OF COLLECTING DATA, PERSONAL DATA AND NON-PII",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "By giving us your consent to collect your Data, Personal Data or Non-PII in this manner, you agree that we may use it on the terms and conditions as set out in the Privacy Policy including but not limited to providing you with support, recommendations and insights in respect of the Data, visualisation of the Data, reporting in connection with the Data, execute your requests in relation to the Data and to send you promotions and offers. We will also use the Data, the Personal Data and the Non-PII to enhance the Amplicomm Analytics Platform and/or the Amplicomm Services and for our internal business purposes. In respect of Data, you are consenting to us accessing your Data with “read” and “write” rights.",
          {
            "text": "Your Data, Personal Data and non-PII may be processed for various purposes, including but not limited to the following purposes:",
            "subItems": [
                "to provide the Amplicomm Analytics Platform and Amplicomm Services to you;",
                "to provide you with recommendations and insights in respect of the Data, visualisation of the Data and reports in connection with the Data and to execute your requests in relation to the Data;",
                "to contact you, manage any account you may have with us and to promote and market to you (including but not limited to by way of direct mail, SMS, MMS, any form of text, e-mail and/or any other mode of telecommunications) other services or products provided by us or our Related Entity(s) and/or strategic partners, products, services, promotion, special offers of third parties whose products and services we think may be of interest to you;",
                "to help us to monitor and improve the performance of our services;",
                "to maintain and develop our services, business systems and infrastructure, including testing and upgrading of the system;",
                "to gain an understanding of you in order for us to enhance our services or to improve your overall experience in using the Amplicomm Analytics Platform and/or the Amplicomm Services; ",
                "to conduct research and development and statistical analysis in connection with the Amplicomm Analytics Platform and/or the Amplicomm Services and to identify your needs, preferences and market trends;",
                "to investigate and resolve any service issues, complaints or other enquiries regarding the Amplicomm Analytics Platform and/or the Amplicomm Services;",
                "to detect and prevent fraudulent or criminal activity;",
                "to comply with any law, rule or regulation to which we are subject;",
                "to verify your identity and to conduct background checks and/or credit worthiness checks on you (if required);",
                "any other uses to which you have explicitly consented; and",
                "such other uses as we may deem reasonably necessary to provide the Amplicomm Analytics Platform and/or the Amplicomm Services."
            ]
          },
          "We may also use certain de-identified and aggregated data about our clients for our internal data analytics purposes. Amplicomm has a legitimate business interest to use the Data, Non-PII and Personal Data we collect from you to provide such requested services and in order to be able to service our clients better. With your consent, we may send you information or services or a promotional nature that we consider may be relevant to you."
        ]
      }
    ]
  },
  {
    "id": "trasnferandStorage",
    "title": "TRANSFER AND STORAGE OF DATA, NON-PII AND PERSONAL DATA OVERSEAS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Our application is hosted within our domain only. However, please note that all of your information may be transferred to and maintained on computer networks which may be located outside of the state, province, country or other governmental jurisdiction in which you reside, and the countries in which these computer networks are located may not have privacy laws as protective as the laws in your country. When you provide us with your Data, Personal Data and Non-PII, you also consent to such Data, Personal Data and Non-PII being transferred overseas. We may also share your Data, Personal Data and non-PII with our service providers and other third parties as set out herein and they may be located outside of the country in which you reside. As these entities are located outside of the country in which you reside, the legal framework in relation to personal data protection or privacy protection may vary in degree in different countries/jurisdictions. We shall ensure that all appropriate steps are taken to safeguard your Data, Personal Data and Non- PII according to the applicable laws. If you require further information about these protective measures, you can email us at support@amplicomm.com.",
        ]
      }
    ]
  },
  {
    "id": "disclosuretoThirdParties",
    "title": "DISCLOSURE TO THIRD PARTIES",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm does not sell, share, rent or trade the information it has collected about you, other than as disclosed within the Privacy Policy.",
          {
            "text": "Your Data, Personal Data or non-PII may be disclosed to third parties, including but without limitation to the following persons:",
            "subItems": [
                "any of our Related Entity(s);",
                "any person engaged/contracted/appointed by us (including, but not limited to, our employees, workers, staff, shareholders, directors, agents, contractors, business or strategic partners or associates) to facilitate the performance and provision of the Amplicomm Services and/or any other purpose which is necessary or related to the provision of the Amplicomm Services to you which may include but not be limited to: any analytics partners to provide analytics on usage of the Amplicomm Analytics Platform; and any service providers which may include hosting, technology and communication providers, support and customer service vendors;",
                "payment channels including but not limited to financial institutions;",
                "any person for the performance of a contract to which you are a party;",
                "any person as required by law, rule or regulation to which we are subject;",
                "any person for the assessment or collection of any tax or duty or any other imposition of a similar nature;",
                "any person for the purpose of responding to services or technical issues;",
                "our professional advisors on a need to know basis for the purpose of those advisors providing advice to us;",
                "any person which acquires all or part of the assets or business of Amplicomm or its Related Entities;",
                "any person when there is a complaint, dispute or conflict, including an accident;",
                "any person in order to enforce the Terms of Use governing your use of the Amplicomm Analytics Platform and/or the Amplicomm Services;",
                "any person if it is necessary, in our sole discretion, to protect the safety, rights, property or security of Amplicomm or its Related Entities, the Amplicomm Analytics Platform and/or the Amplicomm Services or any third party;",
                "any person in order to detect, prevent or otherwise address fraud, security or technical issues and/or to prevent or stop any activity which in our sole discretion is deemed to be illegal, unethical, unlawful, or poses a serious risk to the society in general; and",
                "otherwise as permitted under the applicable law."
            ]
          },
          "Amplicomm only allows third party service providers to process your Personal Data for specified purposes in accordance with its instructions and does not permit them to use your Personal Data for their own purposes. The agreements of Amplicomm with third parties permit them to use the Personal Data only for providing their services and are generally not used for purposes other than as disclosed in the Privacy Policy. In case any agreement is signed with the third parties for any purpose other than as disclosed in the Privacy Policy, Amplicomm shall intimate you from time to time."
        ]
      }
    ]
  },
  {
    "id": "yourObligations",
    "title": "YOUR OBLIGATIONS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "You shall not use the Amplicomm Analytics Platform for any purpose that is inconsistent with the Amplicomm Services and you shall also be bound by the Terms of Use. You are responsible for updating your Personal Data with us and you hereby confirm that all Personal Data furnished to us is true, accurate, complete, not misleading and kept up-to-date at all times. You shall immediately report and notify us in the event of any error or necessary update in the Personal Data which you have submitted and/or provided to us and/or otherwise collected by us whether through your usage of the Amplicomm Analytics Platform and/or the Amplicomm Services or otherwise. If you do not wish to receive certain information from us whether via SMS, MMS, or any form of text, e-mail or otherwise you shall notify us and request to be excluded from such services, failing which you shall deemed to have accepted the services voluntarily. We shall not be responsible for any Data, Personal Data or Non-PII made available by you on any third-party sites which may have a link on the Amplicomm Analytics Platform and or the Amplicomm Services.",
        ]
      }
    ]
  },
  {
    "id": "security",
    "title": "SECURITY",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "We take reasonable precautionary measures to safeguard your Data, Personal Data and non-PII against loss, theft, unauthorised access, or use. However, please note that we cannot guarantee the security of your Data, Personal Data or non-PII and we do not assume or accept any liability for any improper access or use of it or any theft or loss of it due to any reason, including but not limited to corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond our control including but not limited to strike, riots, civil unrest, government policies, tampering of data by unauthorized persons like hackers, war and other natural calamities. The Personal Data is stored on the secured AWS servers of Amplicomm. It is your responsibility to take special care while deciding what information is sent to us via email as emails sent to and from the Amplicomm Analytics Platform might not be 100% secure.",
        ]
      }
    ]
  },
  {
    "id": "declarationOfConsent",
    "title": "DECLARATION OF CONSENT",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "BY AGREEING TO THE PRIVACY POLICY AND/OR BY REGISTERING FOR OR CONTINUING TO USE THE AMPLICOMM ANALYTICS PLATFORM AND/OR THE AMPLICOMM SERVICES, YOU ACCEPT AND AGREE TO YOUR DATA, PERSONAL DATA AND NON-PII BEING COLLECTED, PROCESSED AND DISCLOSED BY US AS SET OUT IN THE PRIVACY POLICY. PLEASE TAKE NOTE THAT YOU MAY REFUSE TO PROVIDE US WITH ANY DATA, PERSONAL DATA AND/OR NON-PII AND TO TERMINATE THIS RELATIONSHIP WITH AMPLICOMM AT ANY TIME HOWEVER.",
        ]
      }
    ]
  },
  {
    "id": "yourRights",
    "title": "YOUR RIGHTS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Right to be informed & right to access: You are entitled to make a written request to us for information of the Personal Data that is being processed by or on behalf of Amplicomm, which we can support.",
          "Right to correct your Personal Data: You may also request for correction and/or modification in relation to any of your Personal Data. If you are concerned with the confidentiality of any information given or you wish to correct any Personal Data provided by you to us, kindly contact us at support@amplicomm.com",
          "Right to prevent processing for direct marketing purpose: If you do not wish to receive certain information from us whether via SMS, MMS, or any form of text, e-mail or otherwise you shall notify us at support@amplicomm.com and request to be excluded from such services or click the “unsubscribe” link at the bottom of any marketing email, failing which you shall deemed to have accepted the services.​",
          "Right to prevent processing of Personal Data likely to cause distress & right to withdraw consent: You are entitled to inform us in writing should you wish us to stop processing your Personal Data by notifying us at support@amplicomm.com or writing to us at support@truflo.ai. However, if you exercise this right, we may not be able to provide the Amplicomm Services to you or allow your further usage of the Amplicomm Analytics Platform.",
          "Right to request deletion of Personal Data: You can request the deletion of your Personal Data by sending an email to our support email support@amplicomm.com, and we will take the necessary action within 30 days."
        ]
      }
    ]
  },
  {
    "id": "retentionOfData",
    "title": "RETENTION OF PERSONAL DATA",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm will only retain your Personal Data for as long as it is necessary to fulfill the purposes, Amplicomm collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements, resolve disputes, conclude any activities related to cancellation of a user account, investigate, or prevent fraud and other inappropriate activity, to enforce our agreements and for other business reasons.",
          "Amplicomm retains your account information for as long as your account is active. In case of user account deactivation or disablement, some of your information and the content provided by you will be retained in order to enable other users to make full use of the Amplicomm Services.",
          "Further, any third party may retain the Personal Data for as long as it is necessary under the applicable law.",
          "To determine the appropriate retention period for Personal Data, Amplicomm considers the amount, nature, and sensitivity of the Personal Data, the potential risk of harm from unauthorized use or disclosure of your Personal Data, the purposes for which Amplicomm processes your Personal Data and whether Amplicomm can achieve those purposes through other means and the applicable legal requirements.",        ]
      }
    ]
  },
  {
    "id": "yourCookies",
    "title": "COOKIES",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm uses cookies to identify which pages are being used, whether you are subsequently visiting the Amplicomm Analytics Platform. This helps us analyse data about webpage traffic and improve our Amplicomm Analytics Platform in order to tailor it to customer needs. Amplicomm uses this information for statistical analysis purposes, to understand your preferences, to retarget advertisements and then the data is removed from the system.",
          "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify browser settings to decline cookies if you prefer. This may prevent you from taking full advantage of the Amplicomm Analytics Platform.",
        ]
      }
    ]
  },
  {
    "id": "noLiability",
    "title": "NO LIABILITY",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Amplicomm Analytics Platform is created and maintained by a reputed web hosting service provider. The Amplicomm Analytics Platform is protected and kept secured by using commercially reasonable security practices.",
          "Amplicomm makes no express representation or warranty as to whether the information you transmit to the Amplicomm Analytics Platform will be intercepted by, or otherwise be received by, an unauthorized third party, and you transmit such information at their own risk. Amplicomm shall have no liability in respect of any content posted by you on the Amplicomm Analytics Platform or on the direct messages.",
          "Amplicomm shall not be liable for any loss of information whatsoever caused whether as a result of any interruption, suspension, or termination of the services and Amplicomm Analytics Platform or otherwise.",
          "Amplicomm shall not be held liable for any loss of data technical or otherwise, information, particulars supplied by you due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond its control including but not limited to strike, riots, civil unrest, government policies, tampering of data by unauthorized persons like hackers, war and other natural calamities.",
          "Amplicomm assumes no liability or responsibility for disclosure of your information due to errors in transmission, unauthorized third-party access or other causes beyond our control. You play an important role in keeping your Personal Data secure.",
        ]
      }
    ]
  },
  {
    "id": "grievanceOfficer",
    "title": "GRIEVANCE OFFICER",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm has designated a Grievance Officer for redressal of all your grievances. The Grievance Officer will respond to all grievances expeditiously and in any case not later than 3 days from the date of receipt of any grievance.",
          {
            "text": "Any complaints or request or concerns with regards to use, processing or disclosure of information provided by you or breach of these terms may be taken up with the designated Grievance Officer as mentioned below:",
            "subItems": [
                "Name: Puneet Saxena",
                "Address: Survey No. 103, NextGen Avenue Wing B, 12th Floor, Bahiratwadi, Plot No.5, C.T.S. No. 2850, Bhamburda, Shivajinagar, Pune, Maharashtra 411016",
                "Phone No.: +919028369949",
                "Email: support@truflo.ai",
            ]
          },
        ]
      }
    ]
  },
  {
    "id": "conflictOfLanguage",
    "title": "CONFLICT OF LANGAUGE",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "If there is any conflict in any different language versions of the Privacy Policy, this English version shall prevail.",
        ]
      }
    ]
  },
  {
    "id": "governingLaw",
    "title": "GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Privacy Policy, and any non-contractual obligations arising out of or in connection with them, shall be governed and construed in accordance with the laws and the rules of India which are deemed incorporated into the Privacy Policy by reference. Any dispute arising out of or in connection with the Privacy Policy (including as to the existence, validity, interpretation, performance, breach or termination thereof) or any dispute regarding non-contractual obligations arising out of or in connection with the Privacy Policy will be subject to the exclusive jurisdiction of the Courts at Pune.",
          "Any claims, dispute and or difference (including a dispute regarding the existence, validity, interpretation or alleged breach of the Privacy Policy) arising out of, or relating to the Privacy Policy shall be referred for arbitration to a sole arbitrator under the provisions of Arbitration and Conciliation Act, 1996 and the amendments thereto from time to time. The venue of Arbitration shall be at Pune and the language shall be English.",
        ]
      }
    ]
  },
  {
    "id": "amendmentsToThePrivacyPolicy",
    "title": "AMENDMENTS TO THE PRIVACY POLICY",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm reserves all rights to amend, modify, vary, terminate, delete and/or add any part or all of the Privacy Policy at any time and from time to time and any notice in relation to any such amendment, modification, variation, termination, deletion and/or addition shall be posted on the Amplicomm Analytics Platform and/or the Amplicomm Services. Your continued usage of the Amplicomm Analytics Platform and/or the Amplicomm Services after being notified of any changes to the Privacy Policy shall be deemed to be an agreement by you to such changes. If you do not agree to any such changes, you may terminate any agreement between you and Amplicomm in relation to your use of the Amplicomm Analytics Platform and/or the Amplicomm Services. However, if we intend to change our degree of access which is currently “Read” and “Write”, we will ask for you express consent before making such a change.",
        ]
      }
    ]
  }
    ]

    return ( 
        <main>
            <Navbar />
            <div className="pageTitle">
                <h1>Privacy Policy</h1>
            </div>

            <InfoDisplay data={data} />

            <Suspense fallback={<div>Loading...</div>}>
                <LeadForm />
            </Suspense>
            
            <Footer />
        </main>
     );
}

export default Policy;