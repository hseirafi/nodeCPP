{
  "targets": [
    {
      "target_name": "heavyProcessing",
      "sources": [ "heavyProcessing.cpp", "rotateProcess.cpp","array_return.cpp" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}