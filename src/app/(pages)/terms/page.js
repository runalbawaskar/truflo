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
          "Please read these terms of use (“Terms of Use”) carefully as they contain important information about your rights and obligations when using the Amplicomm Analytics Platform (as defined hereunder) and/or the Amplicomm Services (as defined hereunder) on our website at Truflo.ai or on our application. The Terms of Use and our Privacy Policy (“Privacy Policy”) form the basis on which you may access and use the Amplicomm Analytics Platform and any associated Amplicomm Services. By using the Amplicomm Analytics Platform and any Amplicomm Services you are deemed to have read, understood and accepted to be bound by the Terms of Use and our Privacy Policy (“the Terms”) and any other related terms of use. If you do not agree with the Terms, you should stop using the Amplicomm Analytics Platform and/or the Amplicomm Services immediately."
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
                "Confidential Information means any information, whether oral or written, which Amplicomm may disclose to you or you may otherwise learn of or discover, relating to the Amplicomm Analytics Platform, the business of Amplicomm or any of its Related Entities and, including but not limited to its documents, business practices, object code, source code, management styles, day-to-day business operations, capabilities, systems, trade secrets, tests, inventions, algorithms, formulae and know-how; hardware, software and network architecture, configuration, drawings, designs and specifications; software development processes and methodologies; software programs, whether in source code or object code; current, future and proposed products and services; product, marketing, business development and sales plans and strategies; customers and prospects, discounts, cost and pricing data, any information or materials with the name, sign, trade name or trademark, all or any commercial or technical data or information, or any other data, documents or agreements or other aspects of Amplicomm's business or your username and password.",
                "Data means any data you may provide to us via the Amplicomm Analytics Platform or as part of the Amplicomm Services and includes any data we may access from you such as ad campaign data, location data and device data.",
                "Amplicomm Analytics Platform means a platform known as Amplicomm Analytics which, among other things, gives customers recommendations on content, product pricing, sales, advertising, inventory, and supply chain optimization.",
                "Intellectual Property Rights means all the present and future worldwide intellectual property rights of Amplicomm relating to tangible and intangible property including, without limiting the generality of the foregoing, (i) all inventions, processes, improvements, developments, discoveries (whether patentable or not, and whether or not patent protection or provisional patent protection has been applied for or granted); (ii) rights associated with works of authorship, including without limitation, copyrights (including computer software), copyright applications, copyright registrations, moral rights; (iii) trademarks including ‘Truflo’, ‘Truflo intellegence’ and ‘Amplicomm’, trade mark applications, trade names, trade dress, brand name rights, service mark rights, logos, slogans; (iv) websites, internet domain names; (v) designs, preparatory and design materials, layouts, drawings (whether or not registrable and whether or not design rights subsist in them); (vi) rights relating to the protection of trade secrets, know-how and confidential information; (vii) all other intellectual, information or proprietary rights anywhere in the world including rights of privacy and publicity, rights to publish information and content in any media (viii) all rights in respect of the copies and adaptations of the intellectual property together with all the goodwill associated therewith recognized in any jurisdiction.",
                "Related Entities means any subsidiary or holding/parent company of Amplicomm or any subsidiary of that holding/parent company, or any other affiliated legal entity with whom we are under common corporate control.",
                "Amplicomm, Our, Us, We refers to Amplicomm India Private Limited, and its Related Entity(s).",
            ]
          },
          "A reference to “person(s)” shall include any company, partnership, individual person, firm, joint venture, association, entity, statutory body, unincorporated body of persons, trust, bureau, minister, agency, instrument, court, regulatory body, government or state, any authority or other body corporate and vice versa.",
          "A reference to you or the user is a reference to a user of any of the Amplicomm Analytics Platform and/or the Amplicomm Services."
        ]
      }
    ]
  },
  {
    "id": "termsAgreement",
    "title": "AGREEMENT",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "By using the Amplicomm Analytics Platform and/or the Amplicomm Services, you accept the Terms and the Terms shall constitute a valid and binding agreement made between you and Amplicomm.",
          "The Amplicomm Analytics Platform and/or the Amplicomm Services are available only to persons of sound mind over the age of majority and “competent to contract” as per the Indian Contract Act, 1872 or the applicable laws of your region and who can form legally binding agreement(s) under the applicable laws. If you do not qualify and fall within the meaning of “incompetent to contract”, you are not permitted to access or use the Amplicomm Analytics Platform and/or the Amplicomm Services.",
          "We reserve all rights, at our sole discretion, to change, modify, add or remove any or all of the Terms in whole or in part, at any time and we will post the updated Terms on the Amplicomm Analytics Platform and/or the Amplicomm Services (as relevant). All changes are effective immediately and your continued use of the Amplicomm Analytics Platform and/or Amplicomm Services after the posting of any amended Terms shall constitute your agreement to be bound by any such changes. We reserve the right to refuse to provide Amplicomm Services to anyone at any time.",
        ]
      }
    ]
  },
  {
    "id": "acccountRegistrationAndUse",
    "title": "ACCOUNT REGISTRATION AND USE",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "To access the Amplicomm Services and/or the Amplicomm Analytics Platform, your account may be manually created by Amplicomm. Thereafter, you will be provided the log-in credentials for your account, wherein you can reset the log-in password and commence use of your account.",
          "To access and use the Amplicomm Analytics Platform or the Amplicomm Services, we may also provide you with the option of creating an account on the Amplicomm Analytics Platform by yourself and you will be required to fill in certain basic information such as name, address, registration number/s, phone number, bank details, etc. and upon payment of the fees as stated below, you will have access to your account;",
          "You agree not to provide any other person or entity with access to the Amplicomm Analytics Platform or portions of it using your username, password or other security information; and",
          "You agree to notify us immediately within 24 (twenty-four) hours of any unauthorized access to or use of your username or password or any other breach of security.",
          "You further agree to notify us immediately within 24 (twenty-four) hours of any employee of yours who is off-boarded or is leaving your organisation, so as to enable us to disable access to such employee.",
        ]
      }
    ]
  },
  {
    "id": "amplicommServices",
    "title": "AMPLICOMM SERVICES",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Amplicomm Services offered or the use of the Amplicomm Analytics Platform available on our website or on our application are the sole and exclusive property of Amplicomm. Amplicomm hereby gives you a non-exclusive, non-transferable, non-sublicensable and revocable right to access and use the Amplicomm Analytics Platform and the Amplicomm Services during the subscription period.",
          "Amplicomm reserves the right to change the nature of the Amplicomm Analytics Platform and Amplicomm Services at its sole discretion. Such change may be notified to you by publishing the same on the Amplicomm Analytics Platform.",
          "Amplicomm reserves the right, at its sole discretion and without prior notice, to temporarily deactivate or suspend your access to the Amplicomm Analytics Platform or the Amplicomm Services. Such actions may be taken for purposes including but not limited to system maintenance, upgrades, testing, repairs, or related activities necessary for their proper operation.",
        ]
      }
    ]
  },
  {
    "id": "amplicommFees",
    "title": "FEES",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "We may charge the fees for our Amplicomm Services and/or Amplicomm Analytics Platform through an offline mode, upon such written terms and conditions as decided between us.",
          "We may also offer different subscription plans directly on the Amplicomm Analytics Platform. Once you select and/or click on a plan, you will be able to subscribe to that subscription plan by paying the fees as mentioned therein, for that particular plan.",
          "All fees paid by you will be inclusive of all the applicable taxes.",
          "The Amplicomm Analytics Platform and the Amplicomm Services will only be available to you during the term of the subscription plan availed by you. Any delay or failure to pay the fees will entitle Amplicomm to suspend or discontinue the Amplicomm Analytics Platform and the Amplicomm Services until the total amounts are paid by you.",
          "All costs and expenses associated with the Terms of Use that are incurred by you are your sole responsibility. You also agree to pay any out of pocket expenses incurred by Amplicomm to provide the Amplicomm Analytics Platform and the Amplicomm Services, as notified to you by Amplicomm.",
          "The subscription, unless cancelled, will be renewed automatically at the end of the term of the subscription availed by you.",
          "You also have the option to change your plan by writing to us at support@truflo.ai and subject to the payment of the difference in fees by you.",
        ]
      }
    ]
  },
  {
    "id": "consentGranted",
    "title": "CONSENT GRANTED BY YOU",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          {
            "text": "When you register for an account with us, you will provide us the following specific authorizations and consents:",
            "subItems": [
              "You understand that Amplicomm may contact you directly using the information provided i.e. you may be contacted through email and may receive information in the form of promotions, newsletters, and special offers. Further, you may receive Amplicomm Service related emails or messages (e.g., account confirmations/verifications, Amplicomm Service updates / changes, and technical and security notices).",
              "You have the option to opt-out of receiving our promotional or newsletter emails at any time by clicking the “unsubscribe” link provided in the email or by contacting us at support@truflo.ai. Opting-out in this manner will not end transmission of Amplicomm Service related emails or communication.",
            ]
          },
        ]
      }
    ]
  },
  {
    "id": "userWarantees",
    "title": "USER WARRANTIES, ACKNOWLEDGMENTS AND UNDERTAKINGS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "By using the Amplicomm Analytics Platform and/or the Amplicomm Services, you hereby acknowledge, represent and warrant that you have read and fully understood all the terms and conditions contained herein and the Privacy Policy.",
          "You undertake to fully comply with the Terms.",
          "You undertake to ensure that the mobile phone/device and/or computer used by you to access the Amplicomm Analytics Platform and/or the Amplicomm Services is legally owned, possessed or used by you at all times and you undertake not to allow any person other than you to access or manipulate the Amplicomm Analytics Platform and/or the Amplicomm Services using your mobile phone, device and/or computer.",
          "You acknowledge that you are responsible for any account you may create with us in connection with the Amplicomm Analytics Platform and/or the provision of the Amplicomm Services and that you are responsible for any activity in such account. You undertake to keep all information in relation to such account up to date.",
          "You agree that the material you are posting: (i) does not violate any applicable law, statute, ordinance, or regulation; (ii) does not violate the contractual or fiduciary rights of any third party; (iii) does not infringe any third party’s intellectual property rights, rights of publicity, or privacy; (iv) is not false or misleading or fraudulent; (v) does not misrepresent your affiliation with any person or entity; (vi) is not defaming; and (vii) is not pornographic, indecent, lewd, or suggestive.",
          "You warrant that you are authorised to share any Data and that Amplicomm and its Related Entities are entitled to rely on this authorisation.",
          "You acknowledge that Amplicomm and its Related Entities are authorised to use the Data in accordance with the terms of the Privacy Policy.",
          "You undertake to only use the Amplicomm Analytics Platform and/or the Amplicomm Services for lawful purposes and the purpose for which it is intended and is not prohibited by the Terms of Use and you further undertake to only use the Amplicomm Analytics Platform and/or the Amplicomm Services for your own use.",
          {
            "text": "You undertake not to",
            "subItems": [
              "modify, translate, create or attempt to create derivative copies of or copy of the Software (as defined hereunder);",
              "reverse engineer, decompile, disassemble or otherwise reduce the object code of the Amplicomm Analytics Platform and/or the Amplicomm Services;",
              "use the Amplicomm Analytics Platform and/or the Amplicomm Services in any way that violates the Terms of Use;",
              "disable, bypass, circumvent, or interfere with any digital rights management, security or access control mechanisms;",
              "use Amplicomm Analytics Platform and/or the Amplicomm Services in any manner which would infringe the Intellectual Property Rights of Amplicomm, any of its Related Entities or any third party;",
              "adapt, edit, change, transform, publish, republish, distribute, redistribute, broadcast, rebroadcast or show or play in public this Amplicomm Analytics Platform or the contents / materials on this Amplicomm Analytics Platform; ",
              "use or access the Amplicomm Analytics Platform in any such way that, in our judgment, adversely affects the performance or function of the Amplicomm Analytics Platform;",
              "misrepresent or embellish the relationship between you and Amplicomm by expressing or implying that Amplicomm is either related or that it supports, sponsors, endorses or contributes to you;",
              "delete or modify any content on the Amplicomm Analytics Platform, including but not limited to, legal notices, disclaimers or proprietary notices such as copyright or trademark symbols, logos, that you do not own or have express permission to modify; and",
              "obtain or attempt to obtain any materials or information through any means not intentionally made available through the Amplicomm Analytics Platform."
            ]
          },
          {
            "text": "You agree that you will not when using the Amplicomm Analytics Platform and/or the Amplicomm Services:",
            "subItems": [
              "impersonate any person or entity or misrepresent your affiliation with any other person or entity;",
              "misrepresent your personal information;",
              "harass or cause harassment of any person;",
              "engage in spamming, flooding, harvesting of e-mail addresses or other personal information, spidering, screen scraping, database scraping including data mining, data extraction, or any other activity with the purpose of obtaining lists of users or any other information available through the Amplicomm Analytics Platform and/or the Amplicomm Services; or",
              "attempt to gain unauthorised access to any section of the Amplicomm Analytics Platform and/or the Amplicomm Services other computer systems or networks, connected to the Amplicomm Analytics Platform and/or the Amplicomm Services, through hacking, password mining or any other means; or",
              "copy, store, host, transmit, send, use, publish, distribute, input or upload to the Amplicomm Analytics Platform any spyware, computer virus, trojan horse, worm, rootkit or other malicious software that are intended to damage, disable, overburden, interfere with, intercept or expropriate Amplicomm’s systems or Amplicomm Analytics Platform.",
            ]
          },
          "You agree that you will not use the Amplicomm Analytics Platform and/or the Amplicomm Services in any manner that could damage, disable, overburden or impair the Amplicomm Analytics Platform and/or the Amplicomm Services or interfere with any other party’s use and enjoyment of the Amplicomm Analytics Platform and/or the Amplicomm Services.",
          "You acknowledge that the Amplicomm Analytics Platform and/or the Amplicomm Services may contain links to websites operated by third parties (“Third Party Websites”).",
          "You further acknowledge that Amplicomm does not have any influence or control over the Third Party Websites and is not responsible for such Third Party Websites. You are advised to check the terms of use and privacy policies of such Third Party Websites.",
          "You acknowledge that the Amplicomm Analytics Platform and/or the Amplicomm Services are provided on a reasonable efforts basis only and that Amplicomm shall not be liable for any unavailability or malfunction of the Amplicomm Analytics Platform and/or the Amplicomm Services for any reason.",
          "You warrant and represent that, if you are a member or representative or agent of a entity, you have the requisite authority to open an account and/or use the Amplicomm Analytics Platform and/or the Amplicomm Services and Amplicomm is entitled to rely on this clause.",
        ]
      }
    ]
  },
  {
    "id": "amplicommIndemnity",
    "title": "INDEMNITY",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          {
            "text": "You agree to fully indemnify, release, defend and hold Amplicomm and its Related Entities and its or their officers, directors, employees, affiliates, agents, licensors and representatives, predecessors, successors, assigns, and attorneys harmless from and against all claims, actions, suits, demands, lawsuits, liability, loss, judgments, risks, costs, settlements, injuries or other expenses (including, but not limited to, legal fees) suffered or incurred by Amplicomm related to arising, directly or indirectly, from:",
            "subItems": [
              "your use of (or failure to use) the Amplicomm Analytics Platform and/or the Amplicomm Services including any deactivation or suspension of the Amplicomm Analytics Platform and/or the Amplicomm Services;",
              "any reliance on the contents of the Amplicomm Analytics Platform and/or the Amplicomm Services;",
              "your breach of the Terms of Use, including, but not limited to, your use of the Amplicomm Analytics Platform, uploading, emailing, posting, publishing, transmitting or submitting any content related to the Amplicomm Analytics Platform, or any misrepresentation, breach of warranty or certification made by you;",
              "your unauthorised use of the Software or the Marks;",
              "any use by Amplicomm or its Related Entities of the Data;",
              "any improper, unauthorised or illegal uses of your mobile phone/device and/or computer used by you to access the Amplicomm Analytics Platform and/or the Amplicomm Services; and",
              "your fraud, violation of law, or willful misconduct.",
            ]
          },
        ]
      }
    ]
  },
  {
    "id": "amplicommRights",
    "title": "AMPLICOMM’S RIGHTS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
            "Amplicomm may modify, suspend, discontinue or restrict the use of any portion of the Amplicomm Analytics Platform and/or the Amplicomm Services without notice or liability to you. The most current version of the Terms of Use as available will supersede all previous versions.",
            "Amplicomm has the absolute discretion and right to reject any person from using the Amplicomm Analytics Platform and/or the Amplicomm Services or any part thereof.",
        ]
      }
    ]
  },
  {
    "id": "intellectualPropertyRights",
    "title": "INTELLECTUAL PROPERTY RIGHTS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "You acknowledge that all Intellectual Property Rights existing in connection with the Amplicomm Analytics Platform and the Amplicomm Services belong to Amplicomm and its Related Entities and that you have no claim or rights to those Intellectual Property Rights. If required by Amplicomm and its Related Entities, if any Intellectual Property Rights are in any way deemed to vest in you, then you shall provide all such assistance at your own cost to ensure that the title to such Intellectual Property Rights vests in or is assigned to Amplicomm and its Related Entities.",
          "Nothing contained on the Amplicomm Analytics Platform should be construed as granting, by implication, any license or right to use Amplicomm’s Intellectual Property. Your misuse of Amplicomm’s Intellectual Property is strictly prohibited. Your use of the Amplicomm Analytics Platform does not grant you ownership of any Intellectual Property Rights.",
          "You acknowledge that all software programming contained in the Amplicomm Analytics Platform and/or the Amplicomm Services (the Software) is owned by or licensed to Amplicomm and that any unauthorised access to, reproduction, redistribution, publication, display or other use of the Software would infringe the Intellectual Property Rights of Amplicomm.",
          "You acknowledge that the trade mark(s), service mark(s), trade name(s), logo(s), symbol(s), brand name(s) and other proprietary marks or any combination of the aforesaid (the Marks) contained on or in the Amplicomm Analytics Platform and/or the Amplicomm Services (save and except for any marks of advertisers) are owned by Amplicomm.",
          "You undertake not to use, copy, edit, vary, reproduce, publish, display, distribute, store, transmit, translate, commercially exploit or disseminate any Marks without the prior written consent of Amplicomm. You further undertake never to claim ownership or rights to the Marks.",
        ]
      }
    ]
  },
  {
    "id": "ampliFeedback",
    "title": "FEEDBACK",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Amplicomm Analytics Platform provides the opportunity for feedback and/or comments by the registered user solely for use of the Amplicomm Analytics Platform to promote fairness in dealings. This feedback and/or comments can be sent by email to support@truflo.ai. It should not be misleading, deceptive, defamatory or libelous.",
          "Amplicomm reserves the right to delete at any time from the Amplicomm Analytics Platform any feedback and/or comments which it reasonably considers to be harmful or detrimental to the Amplicomm Analytics Platform.",
        ]
      }
    ]
  },
  {
    "id": "ampliWarranty",
    "title": "WARRANTY",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "You expressly agree that use of the Amplicomm Analytics Platform and/or the Amplicomm Services and reliance on its content is at your own risk.  Amplicomm and its Related Entities do not make any representations or warranties of any kind regarding the Amplicomm Analytics Platform and/or the Amplicomm Services, the software, or the results that may be obtained from use of any of the foregoing will be accurate, reliable, error-free or uninterrupted, that defects will be corrected, that the Amplicomm Analytics Platform or the server that makes it available are free of viruses or other harmful components or that the Amplicomm Analytics Platform or any Amplicomm Services or items obtained through the Amplicomm Analytics Platform will otherwise meet your needs or expectations. The Amplicomm Analytics Platform and/or the Amplicomm Services are provided on an as is, as available basis, and Amplicomm specifically disclaims any and all express or implied warranties.",
          "All warranties, representations, guarantees, conditions and terms other than those expressly set out in the Terms of Use, whether express or implied by statute, common law, trade usage or otherwise, and whether written or oral, are hereby, to the fullest extent permitted by law, expressly excluded from the Terms of Use. ",
        ]
      }
    ]
  },
  {
    "id": "limitationOfLiability",
    "title": "LIMITATION OF LIABILITY",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm and its Related Entities and its respective directors, employees, agents, affiliates and licensors shall in no event be liable for any damages or losses including, without limitation, direct, indirect, consequential, special, incidental or punitive damages, or any loss of profit, loss of opportunity, loss of goodwill, loss of anticipated saving, loss of revenue, loss of business or anticipated savings, loss of use, loss of data including but not limited to, personal injury, pain, and suffering, emotional distress, and/or any loss resulting from or caused by the Amplicomm Analytics Platform and/or the Amplicomm Services (and the content, analysis or recommendations therein), the Software, any unauthorised access of the Data or any use or misuse of the Data, the Marks or the Terms of Use (including, without limitation, damages resulting from negligence) and/or any suspension, cancellation or termination or use or refusal of your use of the Amplicomm Analytics Platform and/or the Amplicomm Services or any content or material thereof, or any sites linked to the Amplicomm Analytics Platform or delay or disruptions in the Amplicomm Services or  any glitches, bugs, errors or inaccuracies of any kind with respect to the Amplicomm Analytics Platform, or the duration and the manner in which the Amplicomm Services appear on the Amplicomm Analytics Platform and whether caused by tort (including negligence), breach of contract or otherwise, even if foreseeable, the foregoing does not affect any liability which cannot be excluded or limited under applicable law. Amplicomm will not be responsible for any losses arising out of the unauthorised use of your mobile phone/device and/or computer to access the Amplicomm Analytics Platform and/or the Amplicomm Services.",
          "You release and hold us harmless from any and all liability arising from your use of any Third-Party Website.",
        ]
      }
    ]
  },
  {
    "id": "ampliConfidentiality",
    "title": "CONFIDENTIALITY ",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "You agree to keep the Confidential Information confidential and not to disclose it to any third parties without the prior written consent of Amplicomm. Further, you agree to use the Confidential Information only for the specific purposes as allowed by the Terms of Use. Further, any disclosure of the Confidential Information by you to a third party, specifically including a direct competitor, is strictly prohibited and will be challenged in a court of law.",
          "Furthermore, you acknowledge that the Confidential Information is proprietary, confidential and extremely valuable to Amplicomm, and that we would be materially damaged by your disclosure of our Confidential Information. You acknowledge and agree that monetary damages provide an insufficient remedy for the breach of this confidentiality obligation, and that we shall be entitled to injunctive relief.",
          "Amplicomm shall keep the Data confidential but it may disclose such Data to its Related Entities as per the Policy Privacy and its directors, agents, employees, advisors, shareholders, banks, investors or any third party who acquires the business or assets of Amplicomm in whole or in part.",
        ]
      }
    ]
  },
  {
    "id": "regionalAvailabilityDisclaimer",
    "title": "REGIONAL AVAILABILITY DISCLAIMER",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Certain Amplicomm Services available on the Amplicomm Analytics Platform may be available to a specified region or country. Such an availability in one region does not imply their availability in others, and it further does not constitute a commitment by Amplicomm to make them available elsewhere.",
        ]
      }
    ]
  },
  {
    "id": "noticesAndCommunication",
    "title": "NOTICES AND COMMUNICATIONS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Unless stated otherwise, any notices or communications required or permitted with Amplicomm under the Terms of Use or required by law shall be in writing and shall be delivered by registered mail, courier service or by any electronic means, including email to the following address: support@truflo.ai.",
        ]
      }
    ]
  },
  {
    "id": "accountTermination",
    "title": "ACCOUNT TERMINATION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "You have the right to cancel your subscription at any time by notifying Amplicomm at support@truflo.ai. Any fees paid by you is non-refundable.",
          "In case of violation of any provision of the Terms, we have the right to disable your username, password or other identifier, whether chosen by you or provided by us, at any time in our sole discretion with or without reason.",
          "We may, with or without notice, suspend or terminate your account or your use of the Amplicomm Analytics Platform or otherwise deny you access to the Amplicomm Analytics Platform at any time and for any reason, including, without limitation, if we suspect that the information provided by you is untrue, inaccurate, not current, or incomplete. You agree that we will not be liable to you or any third party if we suspend or terminate your access to the Amplicomm Analytics Platform for any reason. We retain sole ownership over your account information.",
          "In addition to the above, Amplicomm may cancel unconfirmed accounts or accounts that have been inactive for a substantial period of time.",
          "You shall not have the right to claim a refund from Amplicomm for such cancellation/ termination.",
          "Effect of Termination. Upon termination of your subscription to the Amplicomm Analytics Platform, you will lose access to the Amplicomm Analytics Platform. Clause 5 (Fees), Clause 13 (Indemnity), Clause 15 (Warranty), Clause 16 (Limitation of Liability), Clause 17 (Confidentiality), Clause 19 (Notices and Communications), Clause 21 (Governing Law and Jurisdiction), Clause 23 (Miscellaneous) as well as any other provision which is intended to survive termination of your subscription to the Platform, shall survive termination thereof.",
        ]
      }
    ]
  },
  {
    "id": "governingLaw",
    "title": "GOVERNING LAW AND JURISDICTION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Terms of Use, and any non-contractual obligations arising out of or in connection with them, shall be governed and construed in accordance with the laws of India and the rules are deemed incorporated into the Terms of Use by reference. Any dispute arising out of or in connection with the Terms of Use (including as to the existence, validity, interpretation, performance, breach or termination thereof) or any dispute regarding non-contractual obligations arising out of or in connection with the Terms of Use will be subject to the exclusive jurisdiction of the Courts of Pune.",
          "You agree that any claims, dispute and or difference (including a dispute regarding the existence, validity, interpretation or alleged breach of the terms and conditions) arising out of, or relating to the Terms of Use shall be referred for arbitration to a sole arbitrator under the provisions of Arbitration and Conciliation Act, 1996 and the amendments thereto from time to time. The seat and venue of Arbitration shall be at Pune, Maharashtra and the language shall be English.",
        ]
      }
    ]
  },
  {
    "id": "forceMajeure",
    "title": "FORCE MAJEURE",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm will not be liable for any delay or failure to perform any obligations under the Terms of Use wherein the delay or failure results from any cause beyond our reasonable control, including acts of God, labor disputes or other industrial disturbances, electrical and power outages, utilities, blockages, embargoes, natural calamities, outbreak of diseases, pandemics or epidemics, riots, acts of government, acts of terrorism or war.",
        ]
      }
    ]
  },
  {
    "id": "ammpliMisc",
    "title": "MISCELLANEOUS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Any term, condition, provision or undertaking in the Terms of Use which is illegal, void, prohibited or unenforceable shall be ineffective to the extent of such illegality, voidness, prohibition or unenforceability, without invalidating the remaining provisions hereof, and any such illegality, voidness, prohibition or unenforceability shall not invalidate or render illegal, void, or unenforceability any other term, condition, provision or undertaking herein contained.",
          "Failure by Amplicomm to enforce any provision of the Terms of Use will not be deemed a waiver of future enforcement of that or any other provision of the Terms of Use.",
          "Provisions that, by their nature, should survive termination of the Terms of Use shall survive termination. By way of example, all of the following will survive termination: any obligation you have to indemnify us, any limitations on our liability, any terms regarding ownership or intellectual property rights, confidentiality and terms regarding disputes between us.",
          "Neither the Terms of Use, nor any terms and conditions contained herein, shall be construed as creating a partnership, joint venture or agency relationship or granting a franchise between you and Amplicomm.",
          "Amplicomm may assign or novate all or part of our rights under the Terms of Use provided we ensure that your rights under the Terms of Use are not prejudiced. You may not assign or novate your rights or liabilities under the Terms of Use without our prior written consent.",
        ]
      }
    ]
  }
    ]

    return ( 
        <main>
            <Navbar />
            <div className="pageTitle">
                <h1>Terms Of Use</h1>
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