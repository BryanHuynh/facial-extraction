import request from 'request'

export const recognition = async (req, res) => {
    const options = {
        method: 'POST',
        url: 'https://luxand-cloud-face-recognition.p.rapidapi.com/photo/detect',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'x-rapidapi-key': `${process.env.API_KEY}`,
          'x-rapidapi-host': `${process.env.API_HOST}`,
          useQueryString: true
        },
        form: {
          photo: 'https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/how-to-take-group-photos-7.jpg?w=1500&ssl=1'
        }
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
      
          //console.log(body);
          res.status(200).send(body);
      });
}