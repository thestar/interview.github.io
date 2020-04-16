// 所有问题数组，包括公共问题集，专业问题集，初始化赋值
var data = [
    {
        // 公共问题集
        title:'common',
        type:'0',
        list:[
            {
                text:'Tell me a little about yourself/introduce yourself'
            },
            {
                text:'What are your biggest strengths and weakness?'
            },
            {
                text:'Where do you see yourself in five years?'
            },
            {
                text:'Out of all the other candidates, why should we hire you?'
            },
            {
                text:'Why do you want this job?'
            },
            {
                text:'Why do you want to leave your current job?'
            },{
                text:'What kind of work environment do you like best?'
            },{
                text:'What is your leadership style? '
            },{
                text:'Tell me how you think other people would describe you.'
            },{
                text:'What can we expect from you in your first three months?'
            },
            {
                text:'What do you like to do outside of work? /What are your hobbits? /What are you good at in your lifetime? '
            },
            {
                text:'What was your salary in your last job? /What do you expect for you salary?'
            },
            {
                text:'What questions do you have for me?'
            },
            {
                text:'What will you do if you disagree with your superior?'
            },
            {
                text:'What do you know about this industry?'
            },
            {
                text:'What do you know about our company?'
            }
        ]
    },
    // 以下为专业问题集
    {
        title:'Accounting',
        type:'1',
        list:[
            {
                text:'What do you consider to be the biggest challenge facing the accounting profession today?'
            },
            {
                text:'Which accounting applications are you familiar with?'
            },
            {
                text:'Describe the advantages and disadvantages of different accounting packages you have used in your most recent accountant jobs.'
            },
            {
                text:'Describe any accounting process that you’ve developed or sought to improve.'
            },
            {
                text:'Describe a time when you helped to reduce costs at a previous accounting job..'
            },
            {
                text:'Describe a time when you had to use numerical data or a graph to convince a manager.'
            },
            {
                text:'Describe a time when you had to work exceptionally hard to provide great service to a customer or client. What did you do and what was the outcome?'
            },
            {
                text:'Describe a time when you faced a particularly demanding deadline to prepare a financial statement or report. How did you react? What was the result?'
            }
        ]
    },
    {
        title: 'Administrative Assistant ',
        type: '2 ',
        list: [
            {
                text:'What computer skills do you have, and what programs are you comfortable using?'
            },
            {
                text:'Are you comfortable using a phone with multiple lines and handling a high volume of telephone calls?'
            },
            {
                text:'At this company, we like to think of ourselves as a team that works together towards the same goals. How do you feel about working in a team environment?'
            },
            {
                text:'Do you prefer to work independently or in a team?'
            },
        ]
    },
    {
        title: 'Business Analyst ',
        type: '3',
        list: [
            {
                text:'What analysis and modeling techniques and methodologies have you found to be the most effective, and why?'
            },
            {
                text:'How many business case engagements have you worked on? What was your involvement?'
            },
            {
                text:'Tell me about a time when you have had to work with difficult stakeholders, and how you handled it.'
            },
            {
                text:'What is Pareto Analysis?'
            },
            {
                text:'What does BPMN stand for? What is BPMN Gateway?'
            },
            {
                text:'Explain the difference between an analysis model and a design model.'
            }
        ]
    },
    {
        title: 'Engineer ',
        type: '4',
        list: [
            {
                text:'Tell me about the most challenging engineering project that you have been involved with during the past year.'
            },
            {
                text:'Describe an experience with a difficult client. How did you handle the situation? What would you have done differently?'
            },
            {
                text:'What checks and balances do you use to make sure that you don it make mistakes?'
            },
            {
                text:'Which software packages are you familiar with? What is the most interesting thing you know how to do with one of these packages?'
            },
            {
                text:'What are you doing to stay current with the latest technology?'
            },
            {
                text:'Share a situation when a project or proposal of yours met resistance or was not adopted in a timely fashion. How did you handle this dilemma?'
            }
        ]
    },
    {
        title: 'Personal Fitness Trainer ',
        type: '5',
        list: [
            {
                text: 'Why did you decide to become a fitness trainer? '
            },
            {
                text: 'Are you CPR-certified? What other certifications do you hold? '
            },
            {
                text: 'How do you keep your fitness training knowledge up to date? '
            },
            {
                text: 'Do you have fitness goals for yourself? If so, what are they? '
            },
            {
                text: '5)What evaluations do you conduct with a new client who is eager to begin a fitness regimen? '
            },
        ]
    }
    ]
// 默认用户将获得的问题库
var questionList = [
    {
        text:'Tell me a little about yourself/introduce yourself'
    },
    {
        text:'What are your biggest strengths and weakness?'
    },
    {
        text:'Where do you see yourself in five years?'
    },
    {
        text:'Out of all the other candidates, why should we hire you?'
    },
    {
        text:'Why do you want this job?'
    },
    {
        text:'Why do you want to leave your current job?'
    },{
        text:'What kind of work environment do you like best?'
    },{
        text:'What is your leadership style? '
    },{
        text:'Tell me how you think other people would describe you.'
    },{
        text:'What can we expect from you in your first three months?'
    },
    {
        text:'What do you like to do outside of work? /What are your hobbits? /What are you good at in your lifetime? '
    },
    {
        text:'What was your salary in your last job? /What do you expect for you salary?'
    },
    {
        text:'What questions do you have for me?'
    },
    {
        text:'What will you do if you disagree with your superior?'
    },
    {
        text:'What do you know about this industry?'
    },
    {
        text:'What do you know about our company?'
    }
];
// 获取用户所选的难度
var difficulty = $(".difficultySelected").val();
// 获取用户所选的岗位
var type = $(".positionSelected").val();
// 初始化随机数组，默认为空数组
var commonList = [];
// 初始化次数，在点击next,skip可用，
var num = 1;
// 初始化标题，即用户所选的岗位，默认为空字符串
var title = '';

// 当用户选择岗位角色值有变时，触发该函数，并获取当前所选值
$('.positionSelected').change(function(){
    type = $(".positionSelected").val();
})

// $('.bgBox').click(function () {
//     $('.bgBox').addClass('none');
//     $('.practiceBox').addClass('none');
// })

// 生成随机函数，即针对生成的题库数组作随机算法，获取新一轮经随机筛选后的题库
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

// 当点击Start interview时触发
$('.startInterview').click(function () {
    // 若已选择岗位和难度，弹窗小时
    if(type && difficulty){
        $('.bgBox').addClass('none');
        $('.practiceBox').addClass('none');
    }
    // 若无选择，则弹出提示
    else{
        alert('Please select information!')
    }
    // 对默认题库进行遍历，匹配与用户选择的岗位相同的题库
    for(var i = 0;i<data.length;i++){
        if(type == data[i].type){
            title = data[i].title;
            for(var t = 0;t<data[i].list.length;t++){
                questionList.push(data[i].list[t]);
            }
            commonList = getRandomArrayElements(questionList, 11);
            var html = '<div class="about-content"><h3 class="title">'+title+'</h3><p>'+'1.'+commonList[1].text+'</p>';
            $(".answerArea").html('');
            $(".answerArea").append(html);
        }
    }
})



function skip(){
    for(num<commonList.length+1;num++;){
        console.log(num,'time')
        console.log(commonList,'commonList')
        var html = '<div class="about-content"><h3 class="title">'+title+'</h3><p>'+num+'.'+commonList[num].text+'</p>';
        $(".answerArea").html('');
        $(".answerArea").append(html);
        if(num>commonList.length){
            console.log('finish')
            alert('This is the last question!')
        }
        return;
    }
};

function restart (){
    num = 0;
    var html = '<div class="about-content"><h3 class="title">'+title+'</h3><p>'+'1.'+commonList[1].text+'</p>';
    $(".answerArea").html('');
    $(".answerArea").append(html);
};

function nextQuest(){
    for(num<commonList.length+1;num++;){
        console.log(num,'time')
        console.log(commonList,'commonList')
        var html = '<div class="about-content"><h3 class="title">'+title+'</h3><p>'+num+'.'+commonList[num].text+'</p>';
        $(".answerArea").html('');
        $(".answerArea").append(html);
        return;
    }
};


function finishQuest(){
    if(num<commonList.length){
        alert('Please finish 10 questions!')
    }else{
        alert('I will send your answer and your video to the teacher! Good luck!')
        window.location.reload();
    }
};

// var items = questionList;
// console.log( getRandomArrayElements(items, 4) );

// video
let video = document.getElementById("video");
function getMedia() {
    let constraints = {
        video: {width: 500, height: 500},
        audio: true
    };
    let promise = navigator.mediaDevices.getUserMedia(constraints);
    promise.then(function (MediaStream) {
        video.srcObject = MediaStream;
        video.play();
    }).catch(function (PermissionDeniedError) {
        console.log(PermissionDeniedError);
    })
}
function takePhoto() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 500, 500);
}

function tyrInterview(){
    let constraints = {
        video: {width: 500, height: 500},
        audio: true
    };
    let promise = navigator.mediaDevices.getUserMedia(constraints);
    promise.then(function (MediaStream) {
        // video.srcObject = MediaStream;
        // video.play();
    }).catch(function (PermissionDeniedError) {
        // console.log(PermissionDeniedError);
    })
}

