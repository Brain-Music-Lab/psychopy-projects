/************************** 
 * Psychopy_Test_App *
 **************************/


// store info about the experiment session:
let expName = 'psychopy_test_app';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(button_press_taskRoutineBegin());
flowScheduler.add(button_press_taskRoutineEachFrame());
flowScheduler.add(button_press_taskRoutineEnd());
flowScheduler.add(text_entry_taskRoutineBegin());
flowScheduler.add(text_entry_taskRoutineEachFrame());
flowScheduler.add(text_entry_taskRoutineEnd());
flowScheduler.add(slider_taskRoutineBegin());
flowScheduler.add(slider_taskRoutineEachFrame());
flowScheduler.add(slider_taskRoutineEnd());
flowScheduler.add(finishRoutineBegin());
flowScheduler.add(finishRoutineEachFrame());
flowScheduler.add(finishRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var text_intro;
var key_resp_intro;
var button_press_taskClock;
var text_button_press_task;
var button1;
var button2;
var button3;
var button4;
var key_resp_button_press_task;
var text_entry_taskClock;
var text_text_entry_task;
var textbox_text_entry_task;
var button_text_entry_task;
var slider_taskClock;
var text_slider_task;
var key_resp_slider_task;
var slider1;
var slider2;
var finishClock;
var text_finish;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  text_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_intro',
    text: 'This text box displays an introduction to the task and instructions for participants.\n\nPress [space] to proceed.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "button_press_task"
  button_press_taskClock = new util.Clock();
  text_button_press_task = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_button_press_task',
    text: 'Click buttons. They should turn green when selected, and white when de-selected. Press [enter] to proceed.',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0.8], height: 0.05,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button1',
    text: 'Click here',
    fillColor: [1.0, 1.0, 1.0],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [(- 0.7), (- 0.7)],
    letterHeight: 0.05,
    size: [0.3, 0.1],
    depth: -1
  });
  button1.clock = new util.Clock();
  
  button2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button2',
    text: 'and here',
    fillColor: [1.0, 1.0, 1.0],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [(- 0.3), (- 0.7)],
    letterHeight: 0.05,
    size: [0.3, 0.1],
    depth: -2
  });
  button2.clock = new util.Clock();
  
  button3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button3',
    text: 'not here',
    fillColor: [1.0, 1.0, 1.0],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0.1, (- 0.7)],
    letterHeight: 0.05,
    size: [0.3, 0.1],
    depth: -3
  });
  button3.clock = new util.Clock();
  
  button4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button4',
    text: 'also click here',
    fillColor: [1.0, 1.0, 1.0],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0.5, (- 0.7)],
    letterHeight: 0.05,
    size: [0.4, 0.1],
    depth: -4
  });
  button4.clock = new util.Clock();
  
  key_resp_button_press_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "text_entry_task"
  text_entry_taskClock = new util.Clock();
  text_text_entry_task = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_text_entry_task',
    text: 'Type something into the textbox below. Click the button to proceed.',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0.8], height: 0.05,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_text_entry_task = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_text_entry_task',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: 'norm', 
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_text_entry_task = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_text_entry_task',
    text: 'Proceed',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.7)],
    letterHeight: 0.05,
    size: [0.3, 0.1],
    depth: -2
  });
  button_text_entry_task.clock = new util.Clock();
  
  // Initialize components for Routine "slider_task"
  slider_taskClock = new util.Clock();
  text_slider_task = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_slider_task',
    text: 'Move the sliders around. Press [t] to continue.',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0.8], height: 0.05,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_slider_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider1 = new visual.Slider({
    win: psychoJS.window, name: 'slider1',
    startValue: 3,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: 'norm',
    labels: [1, 2, 3, 4, 5], fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  slider2 = new visual.Slider({
    win: psychoJS.window, name: 'slider2',
    startValue: 4,
    size: [1.0, 0.1], pos: [0, (- 0.5)], ori: 0.0, units: 'norm',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "finish"
  finishClock = new util.Clock();
  text_finish = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_finish',
    text: "Congrats! You're done now.\n\nTask should close in 5 sec.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_intro_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    key_resp_intro.keys = undefined;
    key_resp_intro.rt = undefined;
    _key_resp_intro_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(text_intro);
    introComponents.push(key_resp_intro);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_intro* updates
    if (t >= 0.0 && text_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_intro.tStart = t;  // (not accounting for frame time here)
      text_intro.frameNStart = frameN;  // exact frame index
      
      text_intro.setAutoDraw(true);
    }
    
    
    // *key_resp_intro* updates
    if (t >= 1.0 && key_resp_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro.tStart = t;  // (not accounting for frame time here)
      key_resp_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.clearEvents(); });
    }
    
    if (key_resp_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_allKeys = _key_resp_intro_allKeys.concat(theseKeys);
      if (_key_resp_intro_allKeys.length > 0) {
        key_resp_intro.keys = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro.rt = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].rt;
        key_resp_intro.duration = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_intro.corr, level);
    }
    psychoJS.experiment.addData('key_resp_intro.keys', key_resp_intro.keys);
    if (typeof key_resp_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_intro.rt', key_resp_intro.rt);
        psychoJS.experiment.addData('key_resp_intro.duration', key_resp_intro.duration);
        routineTimer.reset();
        }
    
    key_resp_intro.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_button_press_task_allKeys;
var button_press_taskComponents;
function button_press_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'button_press_task' ---
    t = 0;
    button_press_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('button_press_task.started', globalClock.getTime());
    // reset button1 to account for continued clicks & clear times on/off
    button1.reset()
    // reset button2 to account for continued clicks & clear times on/off
    button2.reset()
    // reset button3 to account for continued clicks & clear times on/off
    button3.reset()
    // reset button4 to account for continued clicks & clear times on/off
    button4.reset()
    key_resp_button_press_task.keys = undefined;
    key_resp_button_press_task.rt = undefined;
    _key_resp_button_press_task_allKeys = [];
    // keep track of which components have finished
    button_press_taskComponents = [];
    button_press_taskComponents.push(text_button_press_task);
    button_press_taskComponents.push(button1);
    button_press_taskComponents.push(button2);
    button_press_taskComponents.push(button3);
    button_press_taskComponents.push(button4);
    button_press_taskComponents.push(key_resp_button_press_task);
    
    button_press_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function button_press_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'button_press_task' ---
    // get current time
    t = button_press_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_button_press_task* updates
    if (t >= 0.0 && text_button_press_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_button_press_task.tStart = t;  // (not accounting for frame time here)
      text_button_press_task.frameNStart = frameN;  // exact frame index
      
      text_button_press_task.setAutoDraw(true);
    }
    
    
    // *button1* updates
    if (t >= 0 && button1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button1.tStart = t;  // (not accounting for frame time here)
      button1.frameNStart = frameN;  // exact frame index
      
      button1.setAutoDraw(true);
    }
    
    if (button1.status === PsychoJS.Status.STARTED) {
      // check whether button1 has been pressed
      if (button1.isClicked) {
        if (!button1.wasClicked) {
          // store time of first click
          button1.timesOn.push(button1.clock.getTime());
          button1.numClicks += 1;
          // store time clicked until
          button1.timesOff.push(button1.clock.getTime());
        } else {
          // update time clicked until;
          button1.timesOff[button1.timesOff.length - 1] = button1.clock.getTime();
        }
        if (!button1.wasClicked) {
          if ((button1.fillColor === [1.0, 1.0, 1.0]).all()) {
              button1.fillColor = [(- 1.0), 0.0039, (- 1.0)];
          } else {
              if ((button1.fillColor === [(- 1.0), 0.0039, (- 1.0)]).all()) {
                  button1.fillColor = [1.0, 1.0, 1.0];
              }
          }
        }
        // if button1 is still clicked next frame, it is not a new click
        button1.wasClicked = true;
      } else {
        // if button1 is clicked next frame, it is a new click
        button1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button1 hasn't started / has finished
      button1.clock.reset();
      // if button1 is clicked next frame, it is a new click
      button1.wasClicked = false;
    }
    
    // *button2* updates
    if (t >= 0 && button2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button2.tStart = t;  // (not accounting for frame time here)
      button2.frameNStart = frameN;  // exact frame index
      
      button2.setAutoDraw(true);
    }
    
    if (button2.status === PsychoJS.Status.STARTED) {
      // check whether button2 has been pressed
      if (button2.isClicked) {
        if (!button2.wasClicked) {
          // store time of first click
          button2.timesOn.push(button2.clock.getTime());
          button2.numClicks += 1;
          // store time clicked until
          button2.timesOff.push(button2.clock.getTime());
        } else {
          // update time clicked until;
          button2.timesOff[button2.timesOff.length - 1] = button2.clock.getTime();
        }
        if (!button2.wasClicked) {
          if ((button2.fillColor === [1.0, 1.0, 1.0]).all()) {
              button2.fillColor = [(- 1.0), 0.0039, (- 1.0)];
          } else {
              if ((button2.fillColor === [(- 1.0), 0.0039, (- 1.0)]).all()) {
                  button2.fillColor = [1.0, 1.0, 1.0];
              }
          }
        }
        // if button2 is still clicked next frame, it is not a new click
        button2.wasClicked = true;
      } else {
        // if button2 is clicked next frame, it is a new click
        button2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button2 hasn't started / has finished
      button2.clock.reset();
      // if button2 is clicked next frame, it is a new click
      button2.wasClicked = false;
    }
    
    // *button3* updates
    if (t >= 0 && button3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button3.tStart = t;  // (not accounting for frame time here)
      button3.frameNStart = frameN;  // exact frame index
      
      button3.setAutoDraw(true);
    }
    
    if (button3.status === PsychoJS.Status.STARTED) {
      // check whether button3 has been pressed
      if (button3.isClicked) {
        if (!button3.wasClicked) {
          // store time of first click
          button3.timesOn.push(button3.clock.getTime());
          button3.numClicks += 1;
          // store time clicked until
          button3.timesOff.push(button3.clock.getTime());
        } else {
          // update time clicked until;
          button3.timesOff[button3.timesOff.length - 1] = button3.clock.getTime();
        }
        if (!button3.wasClicked) {
          if ((button3.fillColor === [1.0, 1.0, 1.0]).all()) {
              button3.fillColor = [(- 1.0), 0.0039, (- 1.0)];
          } else {
              if ((button3.fillColor === [(- 1.0), 0.0039, (- 1.0)]).all()) {
                  button3.fillColor = [1.0, 1.0, 1.0];
              }
          }
        }
        // if button3 is still clicked next frame, it is not a new click
        button3.wasClicked = true;
      } else {
        // if button3 is clicked next frame, it is a new click
        button3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button3 hasn't started / has finished
      button3.clock.reset();
      // if button3 is clicked next frame, it is a new click
      button3.wasClicked = false;
    }
    
    // *button4* updates
    if (t >= 0 && button4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button4.tStart = t;  // (not accounting for frame time here)
      button4.frameNStart = frameN;  // exact frame index
      
      button4.setAutoDraw(true);
    }
    
    if (button4.status === PsychoJS.Status.STARTED) {
      // check whether button4 has been pressed
      if (button4.isClicked) {
        if (!button4.wasClicked) {
          // store time of first click
          button4.timesOn.push(button4.clock.getTime());
          button4.numClicks += 1;
          // store time clicked until
          button4.timesOff.push(button4.clock.getTime());
        } else {
          // update time clicked until;
          button4.timesOff[button4.timesOff.length - 1] = button4.clock.getTime();
        }
        if (!button4.wasClicked) {
          if ((button4.fillColor === [1.0, 1.0, 1.0]).all()) {
              button4.fillColor = [(- 1.0), 0.0039, (- 1.0)];
          } else {
              if ((button4.fillColor === [(- 1.0), 0.0039, (- 1.0)]).all()) {
                  button4.fillColor = [1.0, 1.0, 1.0];
              }
          }
        }
        // if button4 is still clicked next frame, it is not a new click
        button4.wasClicked = true;
      } else {
        // if button4 is clicked next frame, it is a new click
        button4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button4 hasn't started / has finished
      button4.clock.reset();
      // if button4 is clicked next frame, it is a new click
      button4.wasClicked = false;
    }
    
    // *key_resp_button_press_task* updates
    if (t >= 1 && key_resp_button_press_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_button_press_task.tStart = t;  // (not accounting for frame time here)
      key_resp_button_press_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_button_press_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_button_press_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_button_press_task.clearEvents(); });
    }
    
    if (key_resp_button_press_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_button_press_task.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_button_press_task_allKeys = _key_resp_button_press_task_allKeys.concat(theseKeys);
      if (_key_resp_button_press_task_allKeys.length > 0) {
        key_resp_button_press_task.keys = _key_resp_button_press_task_allKeys[_key_resp_button_press_task_allKeys.length - 1].name;  // just the last key pressed
        key_resp_button_press_task.rt = _key_resp_button_press_task_allKeys[_key_resp_button_press_task_allKeys.length - 1].rt;
        key_resp_button_press_task.duration = _key_resp_button_press_task_allKeys[_key_resp_button_press_task_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    button_press_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function button_press_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'button_press_task' ---
    button_press_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('button_press_task.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button1.numClicks', button1.numClicks);
    psychoJS.experiment.addData('button1.timesOn', button1.timesOn);
    psychoJS.experiment.addData('button1.timesOff', button1.timesOff);
    psychoJS.experiment.addData('button2.numClicks', button2.numClicks);
    psychoJS.experiment.addData('button2.timesOn', button2.timesOn);
    psychoJS.experiment.addData('button2.timesOff', button2.timesOff);
    psychoJS.experiment.addData('button3.numClicks', button3.numClicks);
    psychoJS.experiment.addData('button3.timesOn', button3.timesOn);
    psychoJS.experiment.addData('button3.timesOff', button3.timesOff);
    psychoJS.experiment.addData('button4.numClicks', button4.numClicks);
    psychoJS.experiment.addData('button4.timesOn', button4.timesOn);
    psychoJS.experiment.addData('button4.timesOff', button4.timesOff);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_button_press_task.corr, level);
    }
    psychoJS.experiment.addData('key_resp_button_press_task.keys', key_resp_button_press_task.keys);
    if (typeof key_resp_button_press_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_button_press_task.rt', key_resp_button_press_task.rt);
        psychoJS.experiment.addData('key_resp_button_press_task.duration', key_resp_button_press_task.duration);
        routineTimer.reset();
        }
    
    key_resp_button_press_task.stop();
    // the Routine "button_press_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var text_entry_taskComponents;
function text_entry_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text_entry_task' ---
    t = 0;
    text_entry_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text_entry_task.started', globalClock.getTime());
    textbox_text_entry_task.setText('');
    textbox_text_entry_task.refresh();
    // reset button_text_entry_task to account for continued clicks & clear times on/off
    button_text_entry_task.reset()
    // keep track of which components have finished
    text_entry_taskComponents = [];
    text_entry_taskComponents.push(text_text_entry_task);
    text_entry_taskComponents.push(textbox_text_entry_task);
    text_entry_taskComponents.push(button_text_entry_task);
    
    text_entry_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text_entry_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text_entry_task' ---
    // get current time
    t = text_entry_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_text_entry_task* updates
    if (t >= 0.0 && text_text_entry_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_text_entry_task.tStart = t;  // (not accounting for frame time here)
      text_text_entry_task.frameNStart = frameN;  // exact frame index
      
      text_text_entry_task.setAutoDraw(true);
    }
    
    
    // *textbox_text_entry_task* updates
    if (t >= 0.0 && textbox_text_entry_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_text_entry_task.tStart = t;  // (not accounting for frame time here)
      textbox_text_entry_task.frameNStart = frameN;  // exact frame index
      
      textbox_text_entry_task.setAutoDraw(true);
    }
    
    
    // *button_text_entry_task* updates
    if (t >= 0.0 && button_text_entry_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_text_entry_task.tStart = t;  // (not accounting for frame time here)
      button_text_entry_task.frameNStart = frameN;  // exact frame index
      
      button_text_entry_task.setAutoDraw(true);
    }
    
    if (button_text_entry_task.status === PsychoJS.Status.STARTED) {
      // check whether button_text_entry_task has been pressed
      if (button_text_entry_task.isClicked) {
        if (!button_text_entry_task.wasClicked) {
          // store time of first click
          button_text_entry_task.timesOn.push(button_text_entry_task.clock.getTime());
          button_text_entry_task.numClicks += 1;
          // store time clicked until
          button_text_entry_task.timesOff.push(button_text_entry_task.clock.getTime());
        } else {
          // update time clicked until;
          button_text_entry_task.timesOff[button_text_entry_task.timesOff.length - 1] = button_text_entry_task.clock.getTime();
        }
        if (!button_text_entry_task.wasClicked) {
          // end routine when button_text_entry_task is clicked
          continueRoutine = false;
          
        }
        // if button_text_entry_task is still clicked next frame, it is not a new click
        button_text_entry_task.wasClicked = true;
      } else {
        // if button_text_entry_task is clicked next frame, it is a new click
        button_text_entry_task.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_text_entry_task hasn't started / has finished
      button_text_entry_task.clock.reset();
      // if button_text_entry_task is clicked next frame, it is a new click
      button_text_entry_task.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    text_entry_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text_entry_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text_entry_task' ---
    text_entry_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text_entry_task.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_text_entry_task.text',textbox_text_entry_task.text)
    psychoJS.experiment.addData('button_text_entry_task.numClicks', button_text_entry_task.numClicks);
    psychoJS.experiment.addData('button_text_entry_task.timesOn', button_text_entry_task.timesOn);
    psychoJS.experiment.addData('button_text_entry_task.timesOff', button_text_entry_task.timesOff);
    // the Routine "text_entry_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_slider_task_allKeys;
var slider_taskComponents;
function slider_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'slider_task' ---
    t = 0;
    slider_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('slider_task.started', globalClock.getTime());
    key_resp_slider_task.keys = undefined;
    key_resp_slider_task.rt = undefined;
    _key_resp_slider_task_allKeys = [];
    slider1.reset()
    slider2.reset()
    // keep track of which components have finished
    slider_taskComponents = [];
    slider_taskComponents.push(text_slider_task);
    slider_taskComponents.push(key_resp_slider_task);
    slider_taskComponents.push(slider1);
    slider_taskComponents.push(slider2);
    
    slider_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function slider_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'slider_task' ---
    // get current time
    t = slider_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_slider_task* updates
    if (t >= 0.0 && text_slider_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_slider_task.tStart = t;  // (not accounting for frame time here)
      text_slider_task.frameNStart = frameN;  // exact frame index
      
      text_slider_task.setAutoDraw(true);
    }
    
    
    // *key_resp_slider_task* updates
    if (t >= 0.0 && key_resp_slider_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_slider_task.tStart = t;  // (not accounting for frame time here)
      key_resp_slider_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_slider_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_slider_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_slider_task.clearEvents(); });
    }
    
    if (key_resp_slider_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_slider_task.getKeys({keyList: ['t'], waitRelease: false});
      _key_resp_slider_task_allKeys = _key_resp_slider_task_allKeys.concat(theseKeys);
      if (_key_resp_slider_task_allKeys.length > 0) {
        key_resp_slider_task.keys = _key_resp_slider_task_allKeys[_key_resp_slider_task_allKeys.length - 1].name;  // just the last key pressed
        key_resp_slider_task.rt = _key_resp_slider_task_allKeys[_key_resp_slider_task_allKeys.length - 1].rt;
        key_resp_slider_task.duration = _key_resp_slider_task_allKeys[_key_resp_slider_task_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider1* updates
    if (t >= 0.0 && slider1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider1.tStart = t;  // (not accounting for frame time here)
      slider1.frameNStart = frameN;  // exact frame index
      
      slider1.setAutoDraw(true);
    }
    
    
    // *slider2* updates
    if (t >= 0.0 && slider2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider2.tStart = t;  // (not accounting for frame time here)
      slider2.frameNStart = frameN;  // exact frame index
      
      slider2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    slider_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function slider_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'slider_task' ---
    slider_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_task.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_slider_task.corr, level);
    }
    psychoJS.experiment.addData('key_resp_slider_task.keys', key_resp_slider_task.keys);
    if (typeof key_resp_slider_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_slider_task.rt', key_resp_slider_task.rt);
        psychoJS.experiment.addData('key_resp_slider_task.duration', key_resp_slider_task.duration);
        routineTimer.reset();
        }
    
    key_resp_slider_task.stop();
    psychoJS.experiment.addData('slider1.response', slider1.getRating());
    psychoJS.experiment.addData('slider1.rt', slider1.getRT());
    psychoJS.experiment.addData('slider2.response', slider2.getRating());
    psychoJS.experiment.addData('slider2.rt', slider2.getRT());
    // the Routine "slider_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finishComponents;
function finishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finish' ---
    t = 0;
    finishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('finish.started', globalClock.getTime());
    // keep track of which components have finished
    finishComponents = [];
    finishComponents.push(text_finish);
    
    finishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function finishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finish' ---
    // get current time
    t = finishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_finish* updates
    if (t >= 0.0 && text_finish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_finish.tStart = t;  // (not accounting for frame time here)
      text_finish.frameNStart = frameN;  // exact frame index
      
      text_finish.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_finish.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_finish.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finish' ---
    finishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('finish.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
