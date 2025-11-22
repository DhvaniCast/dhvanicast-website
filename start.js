import handler from 'serve-handler';
import http from 'http';

const PORT = process.env.PORT || 8080;

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: 'dist',
    rewrites: [
      { source: '**', destination: '/index.html' }
    ],
    headers: [
      {
        source: '**/*.apk',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive'
          },
          {
            key: 'Content-Disposition',
            value: 'attachment'
          }
        ]
      },
      {
        source: '**/*.ipa',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/octet-stream'
          },
          {
            key: 'Content-Disposition',
            value: 'attachment'
          }
        ]
      },
      {
        source: '**/*.zip',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/zip'
          },
          {
            key: 'Content-Disposition',
            value: 'attachment'
          }
        ]
      }
    ]
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
