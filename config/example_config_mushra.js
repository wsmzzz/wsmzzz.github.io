// configure the test here
var TestConfig = {
  "TestName": "LJSpeech Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Schubert 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/ref/LJ050-0002.wav",
            "1": "audio/FastSpeech/LJ050-0002_gen.wav",
            "2": "audio/PAT/LJ050-0002_gen.wav",

        }
    },
    {
      "Name": "Schubert 2",
      "TestID": "id1_2",
      "Files": {
            "Reference": "audio/ref/LJ050-0003.wav",
            "1": "audio/FastSpeech/LJ050-0003_gen.wav",
            "2": "audio/PAT/LJ050-0003_gen.wav",
        }
    },
    {
      "Name": "Schubert 3",
      "TestID": "id1_3",
      "Files": {
            "Reference": "audio/ref/LJ050-0004.wav",
            "1": "audio/FastSpeech/LJ050-0004_gen.wav",
            "2": "audio/PAT/LJ050-0004_gen.wav",
        }
    },
    //    
    {
       "Name": "Castanets",
       "TestID": "id2_1",
       "Files": {
            "Reference": "audio/ref/LJ050-0005.wav",
            "1": "audio/FastSpeech/LJ050-0005_gen.wav",
            "2": "audio/PAT/LJ050-0005_gen.wav",
        }
    },
  ]
}
