window.BENCHMARK_DATA = {
  "lastUpdate": 1626247656434,
  "repoUrl": "https://github.com/red75prime/hyper",
  "entries": {
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "25d18c0b74ccf9e51f986daa3b2b98c0109f827a",
          "message": "feat(ffi): add hyper_request_on_informational\n\nThis defines an extension type used in requests for the client that is\nused to setup a callback for receipt of informational (1xx) responses.\nThe type isn't currently public, and is only usable in the C API.",
          "timestamp": "2021-07-12T15:43:58-07:00",
          "tree_id": "da554dd5b853aebeb130f781735d452941b06e1e",
          "url": "https://github.com/red75prime/hyper/commit/25d18c0b74ccf9e51f986daa3b2b98c0109f827a"
        },
        "date": 1626247493191,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58956,
            "range": "± 19288",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "connect": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "25d18c0b74ccf9e51f986daa3b2b98c0109f827a",
          "message": "feat(ffi): add hyper_request_on_informational\n\nThis defines an extension type used in requests for the client that is\nused to setup a callback for receipt of informational (1xx) responses.\nThe type isn't currently public, and is only usable in the C API.",
          "timestamp": "2021-07-12T15:43:58-07:00",
          "tree_id": "da554dd5b853aebeb130f781735d452941b06e1e",
          "url": "https://github.com/red75prime/hyper/commit/25d18c0b74ccf9e51f986daa3b2b98c0109f827a"
        },
        "date": 1626247501279,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 73993,
            "range": "± 5125",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "25d18c0b74ccf9e51f986daa3b2b98c0109f827a",
          "message": "feat(ffi): add hyper_request_on_informational\n\nThis defines an extension type used in requests for the client that is\nused to setup a callback for receipt of informational (1xx) responses.\nThe type isn't currently public, and is only usable in the C API.",
          "timestamp": "2021-07-12T15:43:58-07:00",
          "tree_id": "da554dd5b853aebeb130f781735d452941b06e1e",
          "url": "https://github.com/red75prime/hyper/commit/25d18c0b74ccf9e51f986daa3b2b98c0109f827a"
        },
        "date": 1626247649376,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 80015,
            "range": "± 9486",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7050244,
            "range": "± 966010",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 34035,
            "range": "± 4317",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 236312,
            "range": "± 55215",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52794234,
            "range": "± 2054231",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52868702,
            "range": "± 4673967",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54736180,
            "range": "± 3876472",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4018714,
            "range": "± 296351",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36336,
            "range": "± 1670",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58491,
            "range": "± 2162",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 184503,
            "range": "± 7288",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10034261,
            "range": "± 9248908",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10223197,
            "range": "± 9534985",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9686394,
            "range": "± 9458300",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61419420,
            "range": "± 3905343",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74246646,
            "range": "± 12124788",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6568238,
            "range": "± 810354",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 68223,
            "range": "± 1807",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 129737,
            "range": "± 1254",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}