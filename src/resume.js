export const header = {
    name: "홍길동",
    desc: "개발자",
    email: "",
    github: "https://",
    blog: "https://",
};

export const intro = {
    subject: "Introduce",
    profile: "profile.png",
    intro: `
    안녕하세요! 개발자 홍길동입니다.

    
    만나서 반갑습니다.
    `
};

export const skills = {
    subject: "Skills",
    contents: [
        {
            category: "Frontend",
            desc: [
                { name: "React", proficiency: 25 },
                { name: "HTML", proficiency: 50 },
                { name: "CSS", proficiency: 45 },
                { name: "JavaScript", proficiency: 30 }
            ]
        },
        {
            category: "Backend",
            desc: [
                { name: "Nodejs", proficiency: 20 },
                { name: "PHP", proficiency: 40 },
                { name: "C++", proficiency: 45 },
                { name: "JAVA", proficiency: 30 },
                { name: "Python", proficiency: 50 }
            ]
        },
        {
            category: "DevOps",
            desc: [
                { name: "MySQL", proficiency: 40 }
            ]
        },
    ],
};

export const experience = {
    subject: "Experience",
    contents: [
        {
            title: "~ 근무",
            subtitle: "~ 프로젝트 참여",
            period: "2021.01 ~ 2021.12",
            link: "",
            desc: [
                { main: "~ 사내 프로젝트 참여", sub: ["~ 라이브러리 사용", "~ 백엔드 개발자로 참여"] },
                { main: "~ 사내 프로젝트 참여", sub: [] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "~ 근무",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const projects = {
    subject: "Projects",
    contents: [
        {
            title: "Simple React Resume Template",
            subtitle: "심플한 리액트 이력서 템플릿",
            period: "2021.01 ~ 2021.12",
            link: "",
            desc: [
                { main: "심플한 이력서 템플릿", sub: ["리액트로 제작됨"] }
            ],
            keywords: ["React", "HTML", "CSS", "JavaScript"],
            folder: "simple-react-resume-template",
            images: ["1.png"],
            pdfs: [
                { pdf: "1.pdf", thumbnail: "1-thumbnail.png" },
                { pdf: "1.pdf", thumbnail: "2-thumbnail.png" },
            ]
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ]
};

export const awards = {
    subject: "Awards",
    contents: [
        {
            title: "대상",
            subtitle: "~ 프로젝트",
            period: "2021.01.01",
            link: "",
            desc: [{ main: "~ 프로젝트로 입상", sub: ["~ 라이브러리 사용"] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const research = {
    subject: "Research",
    contents: [
        {
            title: "~ Journal",
            subtitle: "~ 연구",
            period: "2021.01.01",
            link: "",
            desc: [{ main: "~ 에 관한 연구", sub: [] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const education = {
    subject: "Education",
    contents: [
        {
            title: "졸업",
            subtitle: "컴퓨터공학부",
            period: "2014.03 ~ 2021.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "졸업",
            subtitle: "",
            period: "2011.03 ~ 2014.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const certificate = {
    subject: "Certificate",
    contents: [
        {
            title: "정보처리기사",
            subtitle: "한국산업인력공단",
            period: "2021.01.01",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const footer = { updated: "2021. 10. 11." };

export const main = [experience, projects, awards, research, education, certificate]