#include <nan.h>
#include <string>

using namespace v8;
void CalculateResults(const v8::FunctionCallbackInfo<v8::Value>&args) {
    Isolate* isolate = args.GetIsolate();
    std::vector<location> locations;  // we'll get this from Node.js
    std::vector<rain_result> results; // we'll build this in C++
    
    // we'll populate this with the results
    Local<Array> result_list = Array::New(isolate);
   
    // ... and send it back to Node.js as the return value
    args.GetReturnValue().Set(result_list);
}
....
void init(Handle <Object> exports, Handle<Object> module) {
  // part 1
  NODE_SET_METHOD(exports, "avg_rainfall", AvgRainfall);
  // part 2
  NODE_SET_METHOD(exports, "data_rainfall", RainfallData);
  // part 3
  NODE_SET_METHOD(exports, "calculate_results", CalculateResults);
}

NODE_MODULE