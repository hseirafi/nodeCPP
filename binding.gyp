{
  "targets": [
    {
      "target_name": "heavyProcessing",
      "sources": [ "heavyProcessing.cpp" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}