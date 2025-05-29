let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const allCoursesDiv = document.createElement('div');
allCoursesDiv.classList.add('courses');
document.body.append(allCoursesDiv);
for (const course of coursesArray) {
    const courseTitleDiv = document.createElement('div');
    const title = document.createElement('h2');
    title.classList.add('courseTitle');
    title.innerText = course.title;
    const courseDescription = document.createElement('div');
    courseDescription.classList.add('courseDescription');
    const monthDuration = document.createElement('div');
    monthDuration.classList.add('monthDuration');
    monthDuration.innerText = course.monthDuration;
    const hourDuration = document.createElement('div')
    hourDuration.classList.add('hourDuration');
    hourDuration.innerText = course.hourDuration;
    courseDescription.append(monthDuration, hourDuration);
    const modules = document.createElement('div');
    const moduls = document.createElement('ul');
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        modules.appendChild(li);
    }

    courseTitleDiv.append(title, courseDescription, modules);
    allCoursesDiv.appendChild(courseTitleDiv);
    console.log(course.title);

}
