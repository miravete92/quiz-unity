var state = {
	questions: [
		{
			question:"What's the main component of a GameObject?'", 
			answers:[
				{answer:"Transform",right:true},
				{answer:"GameObject"},
				{answer:"BoxCollider"},
				{answer:"Translate"}
			]
		},
		{
			question:"What programmin language can we use in Unity 5?", 
			answers:[
				{answer:"javascript and C#",right:true},
				{answer:"javascript and java"},
				{answer:"java and C#"},
				{answer:"python and javascript"}
			]
		},
		{
			question:"We can use _____ key to move an object to a fixed distance in an axis.", 
			answers:[
				{answer:"space"},
				{answer:"control",right:true},
				{answer:"shift"},
				{answer:"tab"}
			]
		},
		{
			question:"To activate a trigger, we need an object with:", 
			answers:[
				{answer:"BoxCollider"},
				{answer:"Rigidbody",right:true},
				{answer:"MeshFilter"},
				{answer:"None of above"}
			]
		},
		{
			question:"What of this sentences is false?", 
			answers:[
				{answer:"Rigidbody adds physics to GameObjects"},
				{answer:"Colliders add physical shape to GameObjects"},
				{answer:"MeshFilter allows to specify a material for a GameObject",right:true},
				{answer:"Colliders allow to specify a physic material for a GameObject"}
			]
		},
		{
			question:"An incorrect way to select the transform component is:", 
			answers:[
				{answer:"this.transform"},
				{answer:"GetComponent<Transform>()"},
				{answer:"this.gameObject.transform"},
				{answer:"this.Translate(0,0,0).transform",right:true}
			]
		},
		{
			question:"Which of the following primitive GameObjects does not exist.", 
			answers:[
				{answer:"Cube"},
				{answer:"Sphere"},
				{answer:"Cone",right:true},
				{answer:"PointLight"}
			]
		},
		{
			question:"What component do we use to create a spherical trigger arround?", 
			answers:[
				{answer:"BoxCollider"},
				{answer:"BoxTrigger"},
				{answer:"SphereTrigger",right:true},
				{answer:"SphereCollider"}
			]
		},
		{
			question:"What type of joint do we use if we want to simulate a door?", 
			answers:[
				{answer:"Fixed Join"},
				{answer:"Door Joint"},
				{answer:"Hinge Joint",right:true},
				{answer:"Spring Joint"}
			]
		},
		{
			question:"What is a Quaternion?", 
			answers:[
				{answer:"Is a rotation unit bassed on a vector and an w component that represents rotation on its axis.",right:true},
				{answer:"Is a 4 dimmensional vector."},
				{answer:"Represents a matrix in the space and has an w component that stores time."},
				{answer:"That property does not exist."}
			]
		}
	],
	user:{
		answered: 0,
		correct : 0,
		current: 0,
		currentAnswered: false
	}

};
function initQuiz(){
	$(".start").removeClass("hidden");
	$(".question").addClass("hidden");
	$(".end").addClass("hidden");
}
function startQuiz(){
	for(var i = 0; i<state.questions.length;i++){
		state.questions[i].answers = shuffle(state.questions[i].answers);
	}
	state.questions = shuffle(state.questions);

	state.user.answered = 0;
	state.user.correct = 0;
	state.user.current = 0;
	state.user.currentAnswered = false;

	$(".js-numquestions").text(state.questions.length);
	$(".js-correct").text("0");
	$(".js-incorrect").text("0");
	showQuestion(0);
	$(".start").addClass("hidden");
	$(".question").removeClass("hidden");
	$(".end").addClass("hidden");

}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function showQuestion(id){
	state.user.currentAnswered=false;
	$(".questionForm .questionNotifier").text("");
	$(".js-currquestion").text(state.user.current+1);
	$(".questionText").text(state.questions[id].question);
	var questionsHtml="";
	for(var i = 0; i<state.questions[id].answers.length; i++){
		questionsHtml+='<input type="radio" name="answer" value="'+i+'"> <span>'+state.questions[id].answers[i].answer+'</span><br/>';
	}
	$(".questionAnswers").html(questionsHtml);
	$(".questionForm input[type='radio']").prop('checked', false);
	$(".questionForm input[type='submit']").prop('disabled', 'disabled');
	$(".questionForm input[type='submit']").val("Check");
}
function showEnd(){
	$(".start").addClass("hidden");
	$(".question").addClass("hidden");
	$(".end").removeClass("hidden");
}
function handleButtons(){
	$(".buttonStart").click(function(event){
		startQuiz();
	});
	$(".buttonRestart").click(function(event){
		initQuiz();
	});

	$(".questionForm").submit(function(event){
		event.preventDefault();
		if(state.user.currentAnswered){
			state.user.current++;
			if(state.user.current<state.questions.length){
				showQuestion(state.user.current);
			}
			else{
				showEnd();
			}
			
		}
		else{
			state.user.currentAnswered=true;
			$(".questionForm input[type='submit']").val("Next Answer");
			var checkedRadio = $(".questionForm input[type='radio']:checked").val();
			state.user.answered++;
			if(state.questions[state.user.current].answers[checkedRadio].right){
				$(".questionForm .questionNotifier").text("Correct!");
				$(".questionForm .questionNotifier").removeClass("incorrect");
				state.user.correct++;
				$(".js-correct").text(state.user.correct);
			}
			else{
				$(".questionForm .questionNotifier").text("Not correct!");
				$(".questionForm .questionNotifier").addClass("incorrect");
				$(".js-incorrect").text(state.user.answered-state.user.correct);
			}
			console.log("Checked: "+checkedRadio);
			
		}
	});

	$(".questionForm").on("click","input[type='radio']",function(event){
		$(".questionForm input[type='submit']").prop('disabled', false);
	});
}
$(function(){
	initQuiz();
	handleButtons();
});
	
