document.addEventListener('DOMContentLoaded', () => {
    const banTypeSelect = document.getElementById('ban-type');
    const banReasonSelect = document.getElementById('ban-reason');
    const bannedNumberInput = document.getElementById('banned-number');
    const generateBtn = document.getElementById('generate-btn');
    const generatedEmailTextarea = document.getElementById('generated-email');
    const sendEmailBtn = document.getElementById('send-email-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resultSection = document.getElementById('result-section');

    // Email templates stored in JS, with 7 reasons for each ban type
    const templates = {
        temporary: {
            'mistaken-ban': {
                subject: 'Formal Request for Account Review: Potential False Positive',
                body: "Dear WhatsApp Support Team,\n\nI am writing to request a comprehensive review of the temporary restriction placed on my account ({number}). After thorough self-assessment and comparison with WhatsApp's Terms of Service, I am confident that my usage patterns align with platform guidelines.\n\nAccount Background:\n• Regular user since [year]\n• Primarily personal communications with established contacts\n• No history of policy violations\n• Consistent, legitimate usage patterns\n\nRecent Activity Analysis:\nThe restriction appears coincidental with normal activity patterns. All communications were with willing participants and maintained appropriate content standards.\n\nI value WhatsApp's commitment to user safety and am prepared to provide any additional verification needed. The sudden restriction has disrupted important personal and professional communications.\n\nThank you for your diligent review of this matter.\n\nRespectfully"
            },
            'business-disruption': {
                subject: 'Business Continuity Impact: Urgent Review of Essential Service Account - {number}',
                body: "Dear WhatsApp Business Support Team,\n\nI am contacting you regarding the temporary restriction on our business account ({number}), which is currently causing significant operational disruption.\n\nBusiness Impact Assessment:\n• Primary communication channel for customers\n• Critical for time-sensitive service delivery\n• Active business conversations interrupted\n• Tangible impact on operations\n\nCompliance Assurance:\nOur business maintains strict adherence to WhatsApp Business policies, including:\n- Explicit customer opt-in for communications\n- Business profile verification completeness\n- Appropriate messaging frequency and content\n- No broadcast messaging to non-consenting users\n\nThe continuity of our business operations relies heavily on this communication channel. We are prepared to provide business verification documents and usage logs.\n\nSincerely"
            },
            'spam-accusation': {
                subject: 'Appeal: Legitimate Communication Patterns Flagged as Spam',
                body: "Dear WhatsApp Trust & Safety Team,\n\nI am seeking clarification regarding the temporary restriction on my account ({number}), which I understand may relate to messaging patterns.\n\nCommunication Context:\n• Primary Usage: Professional and personal communications\n• Contact Base: Established, consenting contacts\n• Message Types: Normal interpersonal communication\n• All recipients are previously established contacts\n\nPattern Analysis:\nMy messaging activity reflects normal interpersonal communication rather than bulk or automated patterns. All communications maintain appropriate content standards with engaged, willing participants.\n\nI respectfully request review of message content and recipient relationships to verify legitimate usage patterns.\n\nUnderstanding the precise issue would help me adjust usage while maintaining genuine communication.\n\nThank you for your guidance in this matter.\n\nBest regards"
            },
            'group-misconduct': {
                subject: 'Group Participation Review Request: Contextual Analysis Required',
                body: "Dear WhatsApp Support Team,\n\nI am writing to appeal the temporary restriction on my account ({number}), which appears related to group chat participation.\n\nGroup Context:\n• Group Purpose: Professional network/Community organization\n• My Role: Active participant\n• Established group with verified members\n\nParticipation Analysis:\nMy contributions to group conversations have been:\n- Contextually appropriate to group themes\n- Respectful of community guidelines\n- Aligned with group-established norms\n- Within reasonable frequency parameters\n\nI value group communication as a core WhatsApp feature and am committed to being a constructive participant. If any specific messages were concerning, I would appreciate understanding the context to adjust future participation.\n\nRespectfully"
            },
            'automated-system-error': {
                subject: 'Technical Flag Review: Automated System Anomaly Detection',
                body: "Dear WhatsApp Technical Support Team,\n\nI am reporting a potential false positive in your automated monitoring systems affecting my account ({number}).\n\nAnomaly Indicators:\n• Restriction timing coincides with normal activity patterns\n• No policy violations in account history\n• Consistent usage patterns over time\n• All contacts are established relationships\n\nTechnical Context:\nThe restriction appears triggered by normal usage patterns that may have been misinterpreted by automated systems.\n\nI understand the necessity of automated protection systems but believe this represents an edge case where human review is warranted.\n\nThank you for your technical assessment.\n\nSincerely"
            },
            'security-flag': {
                subject: 'Security Verification Request: Account Access Confirmation',
                body: "Dear WhatsApp Security Team,\n\nI am writing to address the temporary security restriction on my account ({number}) and verify my legitimate ownership.\n\nSecurity Assurance:\n• Single device usage\n• No unauthorized access attempts detected\n• Regular security updates applied\n• No third-party applications used\n\nOwnership Verification Prepared:\nI can provide any required verification, including account creation details and recent conversation specifics.\n\nI request security verification and restoration of my account, with commitment to maintaining all recommended security practices.\n\nThank you for protecting user accounts while resolving legitimate access issues.\n\nRespectfully"
            },
            'terms-of-service-misunderstanding': {
                subject: 'Policy Compliance Appeal: Educational Approach Request',
                body: "Dear WhatsApp Policy Team,\n\nI am seeking to address the temporary restriction on my account ({number}) through education and compliance adjustment.\n\nSituation Analysis:\nWhile I strive to fully understand WhatsApp's Terms of Service, I acknowledge there may have been an aspect I misinterpreted.\n\nCompliance Commitment:\n• Immediate adjustment of usage upon clarification\n• Thorough review of relevant policy sections\n• Implementation of learned guidelines\n• Ongoing compliance monitoring\n\nI believe in learning from experiences and am committed to being a fully compliant platform user.\n\nThank you for your educational approach to policy enforcement.\n\nSincerely"
            },
            'Sending-Too-Many-Messages-in-a-Short-Time':{
              subject: 'Volume Spike Explanation: Extraordinary Circumstances Appeal',
              body: "Dear WhatsApp Support Team,\n\nI am writing regarding the temporary restriction on my account ({number}) related to message volume patterns.\n\nExtraordinary Circumstances:\nDuring a recent period, I experienced unusually high messaging activity due to legitimate circumstances requiring rapid communication with established contacts.\n\nPattern Normalization:\nSince the extraordinary circumstances concluded, my messaging patterns have returned to normal levels. I understand platform concerns about volume spikes and will implement better communication planning for future unusual situations.\n\nI request consideration of the contextual factors and restoration of my account.\n\nThank you for understanding exceptional use cases.\n\nRespectfully"
            },
            'Being-Blocked-by-a-Large-Number-of-Users': {
              subject: 'Communication Style Review: User Feedback Analysis Appeal',
              body: "Dear WhatsApp Support Team,\n\nI am addressing the temporary restriction on my account ({number}) which I understand may relate to multiple user blocks.\n\nSelf-Reflection Analysis:\nUpon learning of this issue, I have conducted thorough review of my communication approach and implemented corrective measures.\n\nLearning Perspective:\nI take user feedback seriously and am committed to adjusting my communication style to be more effective and well-received.\n\nI request account restoration with commitment to improved communication practices and respect for recipient preferences.\n\nThank you for the opportunity to learn and improve.\n\nSincerely"
            }
        },
        permanent: {
            'false-report': {
                subject: 'Urgent Security Review: Malicious False Reporting Campaign',
                body: "Dear WhatsApp Trust & Safety Team,\n\nI'm writing to report what appears to be a coordinated false reporting campaign targeting my account ({number}), resulting in permanent restriction.\n\nEvidence suggests my account may have been systematically targeted by malicious reporting without legitimate basis. I maintain complete compliance with all terms of service and can provide context around any specific reports.\n\nI urgently request:\n• Comprehensive investigation into reporting patterns\n• Verification of report authenticity\n• Restoration of my legitimate account\n\nThis appears to be an abuse of your reporting system targeting a legitimate user.\n\nRespectfully"
            },
            'hacked-account': {
                subject: 'Critical Security Incident: Unauthorized Account Access & Subsequent Restriction',
                body: "Dear WhatsApp Security Team,\n\nI'm reporting a security compromise that led to unauthorized access of my account ({number}) and subsequent permanent restriction due to malicious activity by third parties.\n\nI have since:\n• Secured my device and associated email\n• Changed all relevant passwords\n• Implemented two-factor authentication\n• Verified no ongoing unauthorized access\n\nI request security review of the compromise timeline and consideration of extenuating circumstances. The violating activity occurred during a period of unauthorized access, not by the legitimate account owner.\n\nSincerely"
            },
            'unsolicited-communication': {
                subject: 'Policy Compliance Realignment: Communication Standards Appeal',
                body: "Dear WhatsApp Support Team,\n\nI am appealing the permanent restriction on my account ({number}) with full acknowledgment of the communication standards violation.\n\nComprehensive Understanding:\nI now fully comprehend the distinction between appropriate messaging and unsolicited communication. My previous approach, while well-intentioned, failed to meet platform standards.\n\nCorrective Implementation:\n• Complete overhaul of communication protocols\n• Strict adherence to opt-in requirements\n• Respect for recipient preferences\n• Ongoing compliance monitoring\n\nI request one final opportunity to demonstrate proper communication practices and contribute positively to the platform ecosystem.\n\nRespectfully"
            },
            'malicious-content': {
                subject: 'Content Distribution Review: Unintentional Policy Violation Appeal',
                body: "Dear WhatsApp Trust & Safety Team,\n\nI am appealing the permanent restriction on my account ({number}) related to content distribution violations.\n\nContext Clarification:\nThe restricted content was shared without malicious intent or understanding of its inappropriate nature. This represents a significant learning opportunity regarding content verification responsibilities.\n\nPreventive Measures Implemented:\n• Enhanced content screening procedures\n• Digital literacy education completion\n• Zero-tolerance for unverified content sharing\n• Commitment to platform safety standards\n\nI humbly request account restoration with demonstrated understanding of content sharing responsibilities.\n\nSincerely"
            },
            'multiple-reports': {
                subject: 'Comprehensive Account Review: Multiple Report Analysis Request',
                body: "Dear WhatsApp Support Team,\n\nI am requesting thorough investigation of the multiple reports leading to permanent restriction of my account ({number}).\n\nReport Analysis:\nThe collective reports appear to present an inaccurate representation of my account activity and intentions. Individual context for each report would demonstrate legitimate usage patterns.\n\nAccount History:\nLong-standing compliant usage with no previous enforcement actions. Current situation appears to result from misunderstandings or mischaracterizations rather than actual policy violations.\n\nI am confident that detailed review of each report in proper context will reveal the legitimate nature of my account activity.\n\nThank you for your comprehensive assessment.\n\nRespectfully"
            },
            'illegal-activities': {
                subject: 'Formal Legal Compliance Appeal: Erroneous Association with Prohibited Activities',
                body: "Dear WhatsApp Legal & Compliance Team,\n\nI'm formally appealing the permanent restriction on my account ({number}) based on alleged illegal activities. I maintain my complete innocence and believe this stems from either mistaken identity or false reporting.\n\nI can demonstrate:\n• Consistent lawful use of the platform\n• No association with any illegal enterprises\n• Willingness to cooperate fully with any investigation\n• Potential evidence of misidentification\n\nThe severity of this accusation requires thorough review, as it inaccurately characterizes my legitimate usage and represents a significant personal and professional concern.\n\nThis restriction appears based on fundamentally incorrect information.\n\nSincerely"
            },
            'third-party-app-use': {
                subject: 'Compliance Acknowledgment: Third-Party Application Remediation Complete',
                body: "Dear WhatsApp Support Team,\n\nI'm appealing the permanent restriction on my account ({number}) related to previous third-party application usage. I fully acknowledge this violation and have taken comprehensive corrective measures.\n\nRemediation Actions Completed:\n• Immediate removal of unauthorized applications\n• Complete device security audit\n• Installation of official WhatsApp application only\n• Thorough review of Terms of Service compliance\n\nI understand the security risks third-party apps pose to the ecosystem and assure you this was an isolated incident of poor judgment, not malicious intent.\n\nThe lesson has been significantly learned, and I'm committed to being a compliant platform user.\n\nRespectfully"
            },
            'Circumventing-a-Previous-Ban': {
              subject: 'Formal Appeal: Account Restoration Request with Compliance Commitment',
              body: "Dear WhatsApp Appeals Team,\n\nI'm writing regarding the permanent restriction on my account ({number}) for circumventing a previous ban. I acknowledge this violation and take full responsibility for my actions.\n\nComprehensive Understanding:\nI now completely understand the seriousness of attempting to circumvent platform enforcement and the importance of respecting Terms of Service decisions.\n\nThis experience has been profoundly educational. I've gained genuine respect for the importance of platform integrity and enforcement mechanisms.\n\nI humbly request consideration for a final opportunity to demonstrate compliant usage with zero-tolerance understanding for future violations.\n\nSincerely"
            },
          'Malicious-software-or-Phishing-Links':{
            subject: 'Security Education Appeal: Unwitting Distribution of Compromised Content',
            body: "Dear WhatsApp Trust & Safety Team,\n\nI'm appealing the permanent restriction on my account ({number}) related to sharing potentially malicious content. This occurred due to my insufficient security awareness, not malicious intent.\n\nThe incident involved unknowingly forwarding content received from trusted contacts without proper security verification procedures.\n\nSecurity Education Completed:\n• Completed digital security courses\n• Implemented rigorous link verification processes\n• Educated contacts about similar risks\n• Fundamental change in digital communication safety approach\n\nI request restoration with commitment to being a security-conscious user who contributes to platform safety rather than risks.\n\nRespectfully"
          }
        }
    };

    // Dynamically update ban reason dropdown based on ban type
    banTypeSelect.addEventListener('change', () => {
        const banType = banTypeSelect.value;
        const reasons = templates[banType] || {};
        
        banReasonSelect.innerHTML = '<option value="" disabled selected>Select a reason</option>';
        banReasonSelect.disabled = false;

        for (const reason in reasons) {
            const option = document.createElement('option');
            option.value = reason;
            
            // Add fun emojis and descriptive text
            switch(reason) {
              //temporary 
                case 'mistaken-ban':
                    option.textContent = '🤷 Mistaken Ban';
                    break;
                case 'business-disruption':
                    option.textContent = '💼 Business Disruption';
                    break;
                case 'spam-accusation':
                    option.textContent = '🚫 Spam Accusation';
                    break;
                case 'group-misconduct':
                    option.textContent = '👥 Group Misconduct';
                    break;
                case 'automated-system-error':
                    option.textContent = '🤖 Automated System Error';
                    break;
                case 'security-flag':
                    option.textContent = '🔒 Security Flag';
                    break;
                case 'terms-of-service-misunderstanding':
                    option.textContent = '📝 ToS Misunderstanding';
                    break;
                case 'Sending-Too-Many-Messages-in-a-Short-Time':
                    option.textContent = '🛡️ sending too many messages at the same time';
                    break;
                case 'Being-Blocked-by-a-Large-Number-of-Users':
                  option.textContent = '🌊 Being Blocked by a Large Number of Users';
                  break;
                    
                    //permanent 
                case 'false-report':
                    option.textContent = '🛡️ False Report';
                    break;
                case 'hacked-account':
                    option.textContent = '🚨 Hacked Account';
                    break;
                case 'unsolicited-communication':
                    option.textContent = '📢 Unsolicited Communication';
                    break;
                case 'malicious-content':
                    option.textContent = '🔗 Malicious Content';
                    break;
                case 'multiple-reports':
                    option.textContent = '📈 Multiple Reports';
                    break;
                case 'illegal-activities':
                    option.textContent = '⚖️ Illegal Activities';
                    break;
                case 'third-party-app-use':
                    option.textContent = '📲 Third-Party App Use';
                    break;
                case 'Circumventing-a-Previous-Ban':
                  option.textContent = '💢 Circumventing a Previous Ban';
                  break;
                case 'Malicious-software-or-Phishing-Links':
                  option.textContent = '🦠 Malicious Software or Phishing Links';
                  break;
                
                default:
                    option.textContent = reason.replace('-', ' ');
            }
            banReasonSelect.appendChild(option);
        }
    });

    // Handle form submission
    document.getElementById('unban-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const banType = banTypeSelect.value;
        const banReason = banReasonSelect.value;
        const bannedNumber = bannedNumberInput.value.trim();

        if (!banType || !banReason || !bannedNumber) {
            alert('Please fill out all fields.');
            return;
        }

        const template = templates[banType][banReason];
        const generatedBody = template.body.replace('{number}', bannedNumber);

        generatedEmailTextarea.value = generatedBody;
        
        // Show result section and mailto button
        resultSection.classList.remove('hidden');
        sendEmailBtn.classList.remove('hidden');

        // Update the mailto link
        const subject = encodeURIComponent(template.subject);
        const body = encodeURIComponent(generatedBody);
        sendEmailBtn.href = `mailto:support@support.whatsapp.com?subject=${subject}&body=${body}`;
    });
    copyBtn.addEventListener('click', () => {
        const textToCopy = generatedEmailTextarea.value;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                copyBtn.textContent = '✅ Copied!';
                setTimeout(() => {
                    copyBtn.textContent = '📋 Copy Email';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Could not copy text. Please copy it manually.');
            });
    });
});
