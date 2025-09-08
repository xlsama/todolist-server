import { CronJob } from 'cron'

export default defineNitroPlugin(() => {
	const { apiUrl } = useRuntimeConfig()

	if (process.env.NODE_ENV === 'production') {
		new CronJob(
			'*/14 * * * *',
			async function () {
				$fetch(apiUrl)
					.then(() => {
						console.log('🚀 ~ success')
					})
					.catch((err) => {
						console.log('✖️ ~ err', err)
					})
			},
			null,
			true,
			'Asia/Shanghai',
		)
	}
})
