const templates = {
    temporary: {
        'mistaken-ban': {
            subject: 'Formal Request for Account Review: Potential False Positive - {number}',
            body: `Dear WhatsApp Support Team,

I am writing to request a comprehensive review of the temporary restriction placed on my account ({number}). After thorough self-assessment and comparison with WhatsApp's Terms of Service, I am confident that my usage patterns align with platform guidelines.

Account Background:
• Regular user since [year]
• Primarily personal communications with established contacts
• No history of policy violations
• Consistent, legitimate usage patterns

Recent Activity Analysis:
The restriction appears coincidental with [specific normal activity - e.g., "reconnecting with old contacts during holiday period" or "increased family coordination"]. All communications were with willing participants and maintained appropriate content standards.

Requested Actions:
1. Manual review of account activity logs
2. Verification of compliance with Section [X] of Terms of Service
3. Identification of any specific triggers for automated systems

I value WhatsApp's commitment to user safety and am prepared to provide any additional verification needed. The sudden restriction has disrupted important personal and professional communications.

Thank you for your diligent review of this matter.

Respectfully,
[Your Name]
[Optional: Phone number/email for verification]`
        },
        'business-disruption': {
            subject: 'Business Continuity Impact: Urgent Review of Essential Service Account - {number}',
            body: `Dear WhatsApp Business Support Team,

I am contacting you regarding the temporary restriction on our business account ({number}), which is currently causing significant operational disruption.

Business Impact Assessment:
• Primary communication channel for [X] customers
• Critical for time-sensitive service delivery
• [Number] active business conversations interrupted
• Estimated [monetary/time] impact: [specific details]

Compliance Assurance:
Our business maintains strict adherence to WhatsApp Business policies, including:
- Explicit customer opt-in for communications
- Business profile verification completeness
- Appropriate messaging frequency and content
- No broadcast messaging to non-consenting users

Immediate Request:
• Expedited manual review of business account status
• Temporary restoration pending investigation
• Specific guidance on any policy concerns

The continuity of our business operations relies heavily on this communication channel. We are prepared to provide business verification documents and usage logs.

Sincerely,
[Your Name]
[Your Position]
[Business Name & Registration Details, if applicable]`
        },
        'spam-accusation': {
            subject: 'Appeal: Legitimate Communication Patterns Flagged as Spam - {number}',
            body: `Dear WhatsApp Trust & Safety Team,

I am seeking clarification regarding the temporary restriction on my account ({number}), which I understand may relate to messaging patterns.

Communication Context:
• Primary Usage: [Professional networking/Community organization/Family coordination]
• Contact Base: [Number] established, consenting contacts
• Message Types: [Describe nature - e.g., "project updates", "event coordination"]
• Average Daily Volume: [Realistic number] messages

Pattern Analysis:
My messaging activity reflects normal interpersonal communication rather than bulk or automated patterns. All recipients are:
- Previously established contacts
- Engaged in mutual conversations
- Not receiving unsolicited content

I respectfully request:
1. Review of message content and recipient relationships
2. Comparison against legitimate vs. spam patterns
3. Specific feedback on concerning activity

Understanding the precise issue would help me adjust usage while maintaining genuine communication.

Thank you for your guidance in this matter.

Best regards,
[Your Name]`
        },
        'group-misconduct': {
            subject: 'Group Participation Review Request: Contextual Analysis Required - {number}',
            body: `Dear WhatsApp Support Team,

I am writing to appeal the temporary restriction on my account ({number}), which appears related to group chat participation.

Group Context:
• Group Purpose: [Professional network/Community organization/Social club]
• My Role: [Active participant/Group admin]
• Membership Size: [Number] verified members
• Established: [Duration of group existence]

Participation Analysis:
My contributions to group conversations have been:
- Contextually appropriate to group themes
- Respectful of community guidelines
- Aligned with group-established norms
- Within reasonable frequency parameters

Specific Incident Clarification:
If a particular message or interaction triggered this restriction, I would appreciate understanding the context to:
• Address any misunderstandings
• Adjust future participation approach
• Maintain positive group dynamics

I value group communication as a core WhatsApp feature and am committed to being a constructive participant.

Respectfully,
[Your Name]`
        },
        'automated-system-error': {
            subject: 'Technical Flag Review: Automated System Anomaly Detection - {number}',
            body: `Dear WhatsApp Technical Support Team,

I am reporting a potential false positive in your automated monitoring systems affecting my account ({number}).

Anomaly Indicators:
• Restriction timing coincides with [specific normal activity]
• No policy violations in account history
• Consistent usage patterns for [time period]
• All contacts are established relationships

Technical Context:
The restriction appears triggered by:
- [Specific activity that might trigger systems, e.g., "message volume increase during emergency situation"]
- [Potential system misinterpretation, e.g., "rapid response to multiple group chats"]
- [Any other technical explanation]

Requested Technical Review:
• System flag analysis for false positive patterns
• Manual verification of recent activity logs
• Comparison with typical spam/abuse patterns

I understand the necessity of automated protection systems but believe this represents an edge case where human review is warranted.

Thank you for your technical assessment.

Sincerely,
[Your Name]`
        },
        'security-flag': {
            subject: 'Security Verification Request: Account Access Confirmation - {number}',
            body: `Dear WhatsApp Security Team,

I am writing to address the temporary security restriction on my account ({number}) and verify my legitimate ownership.

Security Assurance:
• Single device usage: [Device type/model]
• No unauthorized access attempts detected
• Regular security updates applied
• No third-party applications used

Ownership Verification Prepared:
I can provide any required verification, including:
- Account creation details
- Recent conversation specifics
- Contact relationship verification
- Device information

Potential Trigger Analysis:
The security flag may relate to:
• Recent travel to [location] with different IP
• New device setup [if applicable]
• Network change to [specific WiFi/carrier]

I request security verification and restoration of my account, with commitment to maintaining all recommended security practices.

Thank you for protecting user accounts while resolving legitimate access issues.

Respectfully,
[Your Name]`
        },
        'terms-of-service-misunderstanding': {
            subject: 'Policy Compliance Appeal: Educational Approach Request - {number}',
            body: `Dear WhatsApp Policy Team,

I am seeking to address the temporary restriction on my account ({number}) through education and compliance adjustment.

Situation Analysis:
While I strive to fully understand WhatsApp's Terms of Service, I acknowledge there may have been an aspect I misinterpreted. Specifically, I would appreciate guidance on:

Area of Potential Misunderstanding:
[Specific policy area - e.g., "appropriate group invitation methods", "message forwarding limits", "business communication standards"]

Compliance Commitment:
• Immediate adjustment of usage upon clarification
• Thorough review of relevant policy sections
• Implementation of learned guidelines
• Ongoing compliance monitoring

Requested Resolution:
1. Specific policy section clarification
2. Account restoration with compliance commitment
3. Opportunity to demonstrate understanding

I believe in learning from mistakes and am committed to being a fully compliant platform user.

Thank you for your educational approach to policy enforcement.

Sincerely,
[Your Name]`
        },
        'Sending-Too-Many-Messages-in-a-Short-Time': {
            subject: 'Volume Spike Explanation: Extraordinary Circumstances Appeal - {number}',
            body: `Dear WhatsApp Support Team,

I am writing regarding the temporary restriction on my account ({number}) related to message volume patterns.

Extraordinary Circumstances:
During [specific date/time period], I experienced unusually high messaging activity due to:
• [Specific legitimate reason - e.g., "family emergency coordination", "community event organization", "business crisis management"]
• Time-sensitive nature requiring rapid communication
• [Number] contacts requiring immediate updates

Volume Context:
• Normal daily average: [X] messages
• Peak period volume: [Y] messages over [Z] hours
• All communications with established contacts
• No bulk or automated messaging used

Pattern Normalization:
Since the extraordinary circumstances concluded, my messaging patterns have returned to normal levels. I understand platform concerns about volume spikes and will implement better communication planning for future unusual situations.

I request consideration of the contextual factors and restoration of my account.

Thank you for understanding exceptional use cases.

Respectfully,
[Your Name]`
        },
        'Being-Blocked-by-a-Large-Number-of-Users': {
            subject: 'Communication Style Review: User Feedback Analysis Appeal - {number}',
            body: `Dear WhatsApp Support Team,

I am addressing the temporary restriction on my account ({number}) which I understand may relate to multiple user blocks.

Self-Reflection Analysis:
Upon learning of this issue, I have conducted thorough review of my communication approach:

Potential Contributing Factors:
• [Specific context - e.g., "professional networking with new contacts", "community organizing with diverse groups"]
• Communication style that may have been misinterpreted
• [Any other relevant factors]

Corrective Measures Implemented:
1. Revised introduction approach for new contacts
2. Enhanced clarity in message content
3. Respect for varying communication preferences
4. More selective connection criteria

Learning Perspective:
I take user feedback seriously and am committed to adjusting my communication style to be more effective and well-received.

I request account restoration with commitment to improved communication practices and respect for recipient preferences.

Thank you for the opportunity to learn and improve.

Sincerely,
[Your Name]`
        }
    },
    // [Permanent ban templates would maintain their previous sophisticated versions]
};
