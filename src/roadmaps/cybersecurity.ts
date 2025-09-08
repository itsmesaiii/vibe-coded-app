import { RoadmapData } from "../types";

export const cyberSecRoadmap: RoadmapData = {
  overview:
    "The journey to becoming a Cybersecurity Specialist in 2025 involves mastering networking, operating systems, secure coding, penetration testing, incident response, and cloud security. This roadmap guides you through fundamentals, hands-on security practices, specialized domains like cryptography and malware analysis, and industry certifications to validate your skills.",
  sections: [
    {
      id: "networking-basics",
      title: "1. Networking Fundamentals",
      emoji: "🌐",
      description:
        "Networking is the backbone of cybersecurity. Learn how data travels, network layers, and protocols attackers often exploit.",
      tasks: [
        {
          id: "osi-tcpip",
          title: "Understand OSI & TCP/IP Models",
          description: "Learn OSI 7 layers, TCP/IP stack, encapsulation, and packet flow.",
          resources: [
            { title: "Cisco OSI Model Guide", url: "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-osi-model.html" },
          ],
        },
        {
          id: "ip-routing",
          title: "Learn IP addressing & routing",
          description: "IPv4/IPv6, subnetting, routing basics, ARP, DNS, DHCP.",
          resources: [
            { title: "Subnetting Made Easy", url: "https://www.practicalnetworking.net/" },
          ],
        },
        {
          id: "network-tools",
          title: "Use basic networking tools",
          description: "Ping, Traceroute, Netstat, Wireshark basics.",
          resources: [
            { title: "Wireshark Docs", url: "https://www.wireshark.org/docs/" },
          ],
        },
      ],
      nextSections: ["linux-basics"],
    },
    {
      id: "linux-basics",
      title: "2. Operating Systems and Linux Security",
      emoji: "🐧",
      description:
        "Most servers run Linux. Learn system internals, permissions, and how to harden OS security.",
      tasks: [
        {
          id: "linux-cli",
          title: "Master Linux CLI",
          description: "File operations, process management, system monitoring commands.",
          resources: [
            { title: "Linux Journey", url: "https://linuxjourney.com/" },
          ],
        },
        {
          id: "users-permissions",
          title: "Learn users & permissions",
          description: "Understand root, sudo, chmod, chown, file permissions.",
          resources: [],
        },
        {
          id: "system-logs",
          title: "Analyze system logs",
          description: "Syslog, journalctl, log rotation, auditing.",
          resources: [],
        },
        {
          id: "linux-hardening",
          title: "OS hardening basics",
          description: "Firewall rules (iptables, ufw), SSH security, patch management.",
          resources: [],
        },
      ],
      nextSections: ["secure-coding"],
    },
    {
      id: "secure-coding",
      title: "3. Secure Coding Practices",
      emoji: "💻",
      description:
        "Learn how insecure code becomes a vulnerability. Focus on common web app flaws and secure coding habits.",
      tasks: [
        {
          id: "owasp-top10",
          title: "Understand OWASP Top 10",
          description: "SQLi, XSS, CSRF, SSRF, Insecure Deserialization, etc.",
          resources: [
            { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
          ],
        },
        {
          id: "secure-auth",
          title: "Implement secure authentication",
          description: "Password hashing (bcrypt, Argon2), MFA, session management.",
          resources: [],
        },
        {
          id: "dependency-scanning",
          title: "Learn dependency scanning",
          description: "Check vulnerabilities in libraries using tools like Snyk, Dependabot.",
          resources: [],
        },
      ],
      nextSections: ["ethical-hacking"],
    },
    {
      id: "ethical-hacking",
      title: "4. Ethical Hacking and Penetration Testing",
      emoji: "🕵️",
      description:
        "Hands-on security testing. Learn to scan, exploit, and report vulnerabilities responsibly.",
      tasks: [
        {
          id: "nmap",
          title: "Learn Nmap for port scanning",
          description: "Scan hosts, services, versions, scripts.",
          resources: [
            { title: "Nmap Docs", url: "https://nmap.org/book/man.html" },
          ],
        },
        {
          id: "burp",
          title: "Learn Burp Suite",
          description: "Intercept, modify, and exploit HTTP requests.",
          resources: [
            { title: "Burp Suite Docs", url: "https://portswigger.net/burp" },
          ],
        },
        {
          id: "metasploit",
          title: "Explore Metasploit Framework",
          description: "Exploit DB, payloads, post-exploitation.",
          resources: [
            { title: "Metasploit Unleashed", url: "https://www.offensive-security.com/metasploit-unleashed/" },
          ],
        },
        {
          id: "ctf",
          title: "Practice with CTF challenges",
          description: "HackTheBox, TryHackMe, OverTheWire wargames.",
          resources: [],
        },
      ],
      nextSections: ["cryptography"],
    },
    {
      id: "cryptography",
      title: "5. Cryptography",
      emoji: "🔐",
      description:
        "Understand cryptography to protect data confidentiality, integrity, and authenticity.",
      tasks: [
        {
          id: "symmetric-asymmetric",
          title: "Symmetric & Asymmetric Encryption",
          description: "AES, DES, RSA, ECC.",
          resources: [
            { title: "Cryptography Basics", url: "https://crypto.stanford.edu/" },
          ],
        },
        {
          id: "hashing",
          title: "Learn hashing algorithms",
          description: "SHA-2, SHA-3, bcrypt, Argon2, salting.",
          resources: [],
        },
        {
          id: "digital-signatures",
          title: "Digital signatures & certificates",
          description: "PKI, SSL/TLS, certificate authorities.",
          resources: [],
        },
      ],
      nextSections: ["incident-response"],
    },
    {
      id: "incident-response",
      title: "6. Incident Response & SOC",
      emoji: "🚨",
      description:
        "Learn how to detect, respond, and recover from security incidents. Understand Security Operations Centers (SOC).",
      tasks: [
        {
          id: "siem",
          title: "Learn SIEM tools",
          description: "Splunk, ELK Stack, Graylog for log analysis.",
          resources: [],
        },
        {
          id: "incident-playbooks",
          title: "Study incident response playbooks",
          description: "Containment, eradication, recovery.",
          resources: [],
        },
        {
          id: "forensics",
          title: "Learn basic digital forensics",
          description: "Disk imaging, memory analysis, volatile data collection.",
          resources: [],
        },
      ],
      nextSections: ["cloud-security"],
    },
    {
      id: "cloud-security",
      title: "7. Cloud Security",
      emoji: "☁️",
      description:
        "Most infrastructure is in the cloud. Learn IAM, zero-trust, and securing workloads in AWS, Azure, and GCP.",
      tasks: [
        {
          id: "iam",
          title: "Understand Identity & Access Management",
          description: "Principle of least privilege, RBAC, key management.",
          resources: [],
        },
        {
          id: "k8s-security",
          title: "Kubernetes & container security",
          description: "Pod security policies, image scanning, runtime protection.",
          resources: [],
        },
        {
          id: "cloud-tools",
          title: "Cloud-native security tools",
          description: "AWS GuardDuty, Azure Security Center, GCP Security Command Center.",
          resources: [],
        },
      ],
      nextSections: ["malware-analysis"],
    },
    {
      id: "malware-analysis",
      title: "8. Malware Analysis & Reverse Engineering",
      emoji: "🦠",
      description:
        "Understand how malware works, reverse engineer binaries, and analyze malicious code safely.",
      tasks: [
        {
          id: "sandboxing",
          title: "Use sandboxes",
          description: "Analyze malware behavior in controlled environments.",
          resources: [],
        },
        {
          id: "disassemblers",
          title: "Learn disassembly tools",
          description: "Ghidra, IDA Pro basics.",
          resources: [],
        },
        {
          id: "static-vs-dynamic",
          title: "Static vs dynamic malware analysis",
          description: "Compare source/binary inspection vs runtime monitoring.",
          resources: [],
        },
      ],
      nextSections: ["certifications"],
    },
    {
      id: "certifications",
      title: "9. Certifications & Career Growth",
      emoji: "🎓",
      description:
        "Validate your knowledge with industry certifications and plan your career growth.",
      tasks: [
        {
          id: "ceh",
          title: "Certified Ethical Hacker (CEH)",
          description: "Covers penetration testing fundamentals.",
          resources: [],
        },
        {
          id: "oscp",
          title: "Offensive Security Certified Professional (OSCP)",
          description: "Hands-on penetration testing exam.",
          resources: [],
        },
        {
          id: "cissp",
          title: "Certified Information Systems Security Professional (CISSP)",
          description: "Covers advanced security management.",
          resources: [],
        },
        {
          id: "blue-red-team",
          title: "Explore Blue Team vs Red Team roles",
          description: "Blue team = defense, Red team = offense.",
          resources: [],
        },
      ],
      nextSections: ["cyber-next-steps"],
    },
    {
      id: "cyber-next-steps",
      title: "10. Next Steps & Continuous Learning",
      emoji: "🚀",
      description:
        "Cybersecurity is ever-changing. Stay updated, practice, and contribute to the community.",
      tasks: [
        {
          id: "bug-bounties",
          title: "Participate in bug bounty programs",
          description: "Try HackerOne, Bugcrowd.",
          resources: [],
        },
        {
          id: "follow-blogs",
          title: "Follow cybersecurity blogs",
          description: "KrebsOnSecurity, Dark Reading, ThreatPost.",
          resources: [],
        },
        {
          id: "ctf-practice",
          title: "Keep practicing CTFs",
          description: "Join CTF competitions and security labs.",
          resources: [],
        },
        {
          id: "opensource-security",
          title: "Contribute to security open-source projects",
          description: "Contribute to tools like OWASP ZAP, Snort.",
          resources: [],
        },
      ],
      nextSections: [],
    },
  ],
};
